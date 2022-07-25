package org.openapitools.codegen.model;

import java.util.*;
import java.util.stream.Collectors;

public class ImportMap extends HashMap<String, Object> {

    public ImportMap() {
    }

    public ImportMap(ImportMap importMap) {
      setImport(importMap.getImport());
      setImportModels(importMap.getImportModelsOrEmpty().stream().map(HashMap::new).collect(Collectors.toList()));
    }

    public ImportMap(String importPath) {
      setImport(importPath);
    }

    public ImportMap(String importPath, Set<String> importModels) {
        setImport(importPath);
        setImportModels(importModels.stream().map(
                importModelName -> {
                    Map<String, String> importModel = new HashMap<>();
                    importModel.put("importModel", importModelName);
                    return importModel;
                }
        ).collect(Collectors.toList()));
    }

    public void setImport(String importPath) {
        put("import", importPath);
    }

    public String getImport() {
        return (String) get("import");
    }

    public void setImportModels(List<Map<String, String>> imports) {
        put("importModels", imports);
    }

    @SuppressWarnings("unchecked")
    public List<Map<String, String>> getImportModels() {
        return (List<Map<String, String>>) get("imports");
    }

    @SuppressWarnings("unchecked")
    public List<Map<String, String>> getImportModelsOrEmpty() {
        return (List<Map<String, String>>) getOrDefault("imports", new ArrayList<>());
    }

}
