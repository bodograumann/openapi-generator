package org.openapitools.codegen.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ModelsMap extends HashMap<String, Object> {

    public ModelsMap() {}

    public void setModels(List<ModelMap> modelMaps) {
        put("models", modelMaps);
    }

    @SuppressWarnings("unchecked")
    public List<ModelMap> getModels() {
        return (List<ModelMap>) get("models");
    }

    public void setImports(List<ImportMap> imports) {
        put("imports", imports);
    }

    @SuppressWarnings("unchecked")
    public List<ImportMap> getImports() {
        return (List<ImportMap>) get("imports");
    }

    @SuppressWarnings("unchecked")
    public List<ImportMap> getImportsOrEmpty() {
        return (List<ImportMap>) getOrDefault("imports", new ArrayList<>());
    }

}
