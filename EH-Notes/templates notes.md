-  to run add to jar this option  -ig.ini

  - template = hl7.fhir.template  (loads the templates from repo)
  - template = /Users/ehaas/Documents/FHIR/IG-Template2/template  (loads the templates from local directory)
  - template (eg after load)

   - see bash script to run without fetching template each time.
- also need all the stuff in ig.ini from properties.txt to run

    ~~~
    [IG]
    ig = input/ig.xml
    template = /Users/ehaas/Documents/FHIR/IG-Template2/template
    usage-stats-opt-out = false
    #guidename must match the id of the implementation guide
    guidename=healthedatainc.ig-template2-0.0.0
    copyrightyear=2015+
    license=CC0-1.0
    version=0.0.0
    ballotstatus=CI Build
    fhirspec=http://build.fhir.org/
    #excludexml=Yes
    #excludejson=No
    #excludettl=Yes
    ~~~
    - why not already set up in ig.ini or better yet load from yaml, csv or json
    - what about dependencies? are we just redoing ig.json here.
    - need a way to incorporate all this into ig resource
    - what is :  `properties.txt` ? is this for _config.yml?

  - what is properties.txt?

      ```
      #guidename must match the id of the implementation guide
      guidename=test
      copyrightyear=2015+
      license=CC0-1.0
      version=0.0.0
      ballotstatus=CI Build
      fhirspec=http://build.fhir.org/
      #excludexml=Yes
      #excludejson=No
      #excludettl=Yes
      ```

- config.yml looks like this for now:

    ~~~
    kramdown:
      toc_levels:    1..3
    ~~~
     - need to add a whole bunch of stuff to my templates work
     - also option for site variables

- why do I need a `ignoreWarnings.txt` if I don't want to ignore any  - default to none if not there
- why is toc the root and not index.xhtml
- fix so can add images in markdown using bootstrap classes

need to add extension for spreadsheets to ig.xml file

- do I need a license file or is that a git hub thing?
- I don't think I need the .bat files since I use bash
- what do the transforms do?  Do they do the same as the layouts?
- need to add a url path to examples and resources so not bound to id name - extension?
- needed to add dependencies to ig.xml this causes an error?

~~~
<dependsOn>  <!-- 0..* Another Implementation guide this depends on -->
 <uri><!-- 1..1 canonical(ImplementationGuide) Identity of the IG that this depends on --></uri>
 <packageId value="[id]"/><!-- 0..1 NPM Package name for IG this depends on -->
 <version value="[string]"/><!-- 0..1 Version of the IG -->
</dependsOn>
~~~

this causes an error:

~~~
java.lang.Exception: IG Name must be a valid token (null)
	at org.hl7.fhir.igtools.publisher.Publisher.loadIg(Publisher.java:2114)
	at org.hl7.fhir.igtools.publisher.Publisher.initializeFromIg(Publisher.java:1408)
	at org.hl7.fhir.igtools.publisher.Publisher.initialize(Publisher.java:1113)
	at org.hl7.fhir.igtools.publisher.Publisher.execute(Publisher.java:600)
	at org.hl7.fhir.igtools.publisher.Publisher.main(Publisher.java:6402)
Exception in thread "main" java.lang.NullPointerException
	at org.hl7.fhir.igtools.publisher.Publisher.main(Publisher.java:6412)
~~~

add globals too

~~~
<global>  <!-- 0..* Profiles that apply globally -->
 <type value="[code]"/><!-- 1..1 Type this profile applies to -->
 <profile><!-- 1..1 canonical(StructureDefinition) Profile that all resources must conform to --></profile>
</global>
~~~

- getting IG canonical is a pain in the ass  - need to download the  package - suggest publishing in the footer I mean why do we need both the package and the canonical here?
- forcing files names to be the same a ids is a pain in the ass - should be able to specifyt the url
- need to autocreate the IG resource from the file tree and source data
- dependency name/code should be an element or an extension.  using the id element is a kludge.
- need layouts to avoid needless repetition in the templates
- rethink the folder names and file tree it should mirror the ig page structure and use html source file name conventions. (pick one)
- frame needs an example list generator, copy-me.html, examplebuttons, schematron-list-generator, img formatters, and a toc-generator
- assumes need front matter for Jekyll based publishing
- generate the ig.xml outside the framework using python script - publish on web for easy access.
- assume no ant script for now.
