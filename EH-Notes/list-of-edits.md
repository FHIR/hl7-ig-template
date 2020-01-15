framework  no ant
use bash script tooling on the front end to create and install the
config files and run ig-pub without internal scripting

note to use publish.sh

to use load template use -l parameter
to use local (test) template use -u parameter
to use loaded template no -l or -u parameters

task list

1. fix markdown friendly images
 issue with not following boot strap and spurious tags

1. add logo variable
1. update css as test
2. add section numbering for ie
3. update look and feel
4. add copy me
5. update and simplify layout
6. suggest new file tree structure and way to autogen menu.


in order to get templates to work out of the box for my templates...

Using Lloyds template to start

### need to rename directories:

- `source` to `include`
- `_includes` to `includes` and move to input dir  this is not how Jekyll spec defines this!
- 'pages' to 'pagecontent'
- this file to input folder 'ignoreWarnings.tx'
- note that temp/input-cache all outside of generated_files directory

### need to add extensions for each spreadsheet to ig.xml

  see https://wiki.hl7.org/FHIR_IG_publisher_templates

 -add extensions for spreadsheets that go in ig.xml or ig.yml
~~~
<extension url="http://hl7.org/fhir/StructureDefinition/igpublisher-spreadsheet">
  <valueUri value="structuredefinition-sdc-profile-spreadsheet.xml"/>
</extension>
~~~

### file names need to match ids !!  stoopid!!

### What is docs folder for?

### remove toc.html from IG since being created 2x by scripts Arggghhhh...

### menu.xml is missing since is menu.md  changed to xml  and add a stupid namespace !!!

## This is no easier than what had before....!!!

## moved example-list-generator.md and schematron-list-generator example button files and image files to includes directory  these are framework things that should not be mixed with the user data

## strip out front matter - antipattern to Jekyll

created IG with several rendering issues.

save as branch and start over with my own templates :-)
