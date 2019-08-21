var json = JSON.parse(new Packages.java.lang.String(Packages.java.nio.file.Files.readAllBytes(Packages.java.nio.file.Paths.get(project.getProperty("ig.source")+"json")), "UTF-8"));

json.publisher = "jjjjj";

var out = new java.io.BufferedWriter(new java.io.FileWriter(project.getProperty("ig.dest")+"json"));
out.write(JSON.stringify(json));
out.close( );
