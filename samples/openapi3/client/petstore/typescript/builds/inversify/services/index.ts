import { inject, injectable, multiInject, optional, interfaces } from "inversify";

import { Configuration } from "../configuration";
import { ServerConfiguration, servers } from "../servers";
import { authMethodServices, AuthMethods } from "../auth/auth";

import { IsomorphicFetchHttpLibrary as DefaultHttpLibrary } from "../http/isomorphic-fetch";

import { AbstractHttpLibrary, AbstractMiddleware, AbstractServerConfiguration } from "./http";
import { AbstractConfiguration, AbstractAuthMethod, AbstractTokenProvider } from "./configuration";

export { AbstractHttpLibrary, AbstractMiddleware, AbstractServerConfiguration, AbstractConfiguration, AbstractAuthMethod, AbstractTokenProvider };

export * from "./PromiseAPI";


@injectable()
class InjectableConfiguration implements AbstractConfiguration {
    public authMethods: AuthMethods = {};

    constructor(
        @inject(AbstractServerConfiguration) @optional() public baseServer: AbstractServerConfiguration = servers[0],
        @inject(AbstractHttpLibrary) @optional() public httpApi: AbstractHttpLibrary = new DefaultHttpLibrary(),
        @multiInject(AbstractMiddleware) @optional() public middleware: AbstractMiddleware[] = [],
        @multiInject(AbstractAuthMethod) @optional() securityConfiguration: AbstractAuthMethod[] = []
    ) {
        for (const authMethod of securityConfiguration) {
            const authName = authMethod.getName();
            // @ts-ignore
            if (authMethodServices[authName] !== undefined) {
              // @ts-ignore
              this.authMethods[authName] = authMethod;
            }
        }
    }
}

/**
 * Helper class to simplify binding the services
 */
export class ApiServiceBinder {
    constructor(private container: interfaces.Container) {
        this.container.bind(AbstractConfiguration).to(InjectableConfiguration);
    }

    /**
     * Allows you to bind a server configuration without having to import the service identifier.
     */
    public bindServerConfiguration() {
        return this.container.bind(AbstractServerConfiguration);
    }

    /**
     * Use one of the predefined server configurations.
     *
     * To customize the server variables you can call `setVariables` on the
     * return value;
     */
    public bindServerConfigurationToPredefined(idx: number) {
        this.container.bind(AbstractServerConfiguration).toConstantValue(servers[idx]);
        return servers[idx];
    }

    /**
     * Explicitly define the service base url
     */
    public bindServerConfigurationToURL(url: string) {
        return this.container.bind(AbstractServerConfiguration).toConstantValue(
            new ServerConfiguration<{}>(url, {})
        );
    }

    /**
     * Allows you to bind a http library without having to import the service identifier.
     */
    public bindHttpLibrary() {
      return this.container.bind(AbstractHttpLibrary);
    }

    /**
     * Allows you to bind a middleware without having to import the service identifier.
     *
     * You can bind multiple middlewares by calling this multiple method times.
     *
     * TODO: How to conveniently support PromiseMiddleware? It would be nice if the user would not have to be aware of the base (observable) Middleware and everthing is automatically wrapped.
     */
    public bindMiddleware() {
        return this.container.bind(AbstractMiddleware);
    }

    /**
     * Allows you to bind an auth method without having to import the service identifier.
     *
     * Note: The name of the bound auth method needs to be known in the specs,
     * because the name is used to decide for which endpoints to apply the authentication.
     */
    public bindAuthMethod() {
        return this.container.bind(AbstractAuthMethod);
    }

    /**
     * Use one of the predefined auth methods.
     *
     * Make sure that you have injected all dependencies for it.
     */
    public bindAuthMethodToPredefined(name: keyof AuthMethods) {
        return this.container.bind(AbstractAuthMethod).to(authMethodServices[name]);
    }
}
