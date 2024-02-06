"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[836],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=d(o),c=a,m=p["".concat(l,".").concat(c)]||p[c]||u[c]||n;return o?r.createElement(m,i(i({ref:t},h),{},{components:o})):r.createElement(m,i({ref:t},h))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<n;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},3584:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=o(7462),a=(o(7294),o(3905));const n={sidebar_position:8,title:"\u2753 FAQ",description:"Frequently asked questions."},i=void 0,s={unversionedId:"faq",id:"faq",title:"\u2753 FAQ",description:"Frequently asked questions.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",draft:!1,editUrl:"https://github.com/shorebirdtech/docs/tree/main/docs/faq.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\u2753 FAQ",description:"Frequently asked questions."},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf93 Concepts",permalink:"/concepts"},next:{title:"\ud83d\udc77 Status",permalink:"/status"}},l={},d=[{value:"What is &quot;code push&quot;?",id:"what-is-code-push",level:3},{value:"What is the difference between a patch and a release?",id:"what-is-the-difference-between-a-patch-and-a-release",level:3},{value:"Can I use Shorebird in my country?",id:"can-i-use-shorebird-in-my-country",level:3},{value:"Does Shorebird comply with Play Store guidelines?",id:"does-shorebird-comply-with-play-store-guidelines",level:3},{value:"Does Shorebird comply with App Store guidelines?",id:"does-shorebird-comply-with-app-store-guidelines",level:3},{value:"What is the roadmap?",id:"what-is-the-roadmap",level:3},{value:"Can I self-host Shorebird?",id:"can-i-self-host-shorebird",level:3},{value:"Can I use Shorebird with my team?",id:"can-i-use-shorebird-with-my-team",level:3},{value:"Does Shorebird store my source code?",id:"does-shorebird-store-my-source-code",level:3},{value:"Can I use Shorebird from my CI system?",id:"can-i-use-shorebird-from-my-ci-system",level:3},{value:"How does this relate to Firebase Remote Config or Launch Darkly?",id:"how-does-this-relate-to-firebase-remote-config-or-launch-darkly",level:3},{value:"How big of a dependency footprint does this add?",id:"how-big-of-a-dependency-footprint-does-this-add",level:3},{value:"Does code push work with large applications?",id:"does-code-push-work-with-large-applications",level:3},{value:"What can I use Shorebird code push for?",id:"what-can-i-use-shorebird-code-push-for",level:3},{value:"What can&#39;t we use Shorebird code push for?",id:"what-cant-we-use-shorebird-code-push-for",level:3},{value:"Can I use Shorebird for all my Dart changes?",id:"can-i-use-shorebird-for-all-my-dart-changes",level:3},{value:"Does Shorebird submit to the stores for me?",id:"does-shorebird-submit-to-the-stores-for-me",level:3},{value:"What does Shorebird store on disk and where?",id:"what-does-shorebird-store-on-disk-and-where",level:3},{value:"How does this relate to Flutter Hot Reload?",id:"how-does-this-relate-to-flutter-hot-reload",level:3},{value:"What types of changes does Shorebird code push support?",id:"what-types-of-changes-does-shorebird-code-push-support",level:3},{value:"Does Shorebird support Flutter Web?",id:"does-shorebird-support-flutter-web",level:3},{value:"What platforms does Shorebird support?",id:"what-platforms-does-shorebird-support",level:3},{value:"What OS versions does Shorebird support?",id:"what-os-versions-does-shorebird-support",level:3},{value:"What versions of Flutter does Shorebird support?",id:"what-versions-of-flutter-does-shorebird-support",level:3},{value:"Does code push require the internet to work?",id:"does-code-push-require-the-internet-to-work",level:3},{value:"How is Shorebird affected by lack of network connectivity?",id:"how-is-shorebird-affected-by-lack-of-network-connectivity",level:3},{value:"What happens if a user doesn&#39;t update for a long time and misses an update?",id:"what-happens-if-a-user-doesnt-update-for-a-long-time-and-misses-an-update",level:3},{value:"How does Shorebird relate to Flutter?",id:"how-does-shorebird-relate-to-flutter",level:3},{value:"When do updates happen?",id:"when-do-updates-happen",level:3},{value:"Do I need to keep my app_id secret?",id:"do-i-need-to-keep-my-app_id-secret",level:3},{value:"Can I use Dart defines with Shorebird?",id:"can-i-use-dart-defines-with-shorebird",level:3},{value:"What information is sent to Shorebird servers?",id:"what-information-is-sent-to-shorebird-servers",level:3},{value:"How does Shorebird interact with Play Testing Tracks or Apple TestFlight?",id:"how-does-shorebird-interact-with-play-testing-tracks-or-apple-testflight",level:3},{value:"Billing",id:"billing",level:2},{value:"How do I upgrade or downgrade my plan?",id:"how-do-i-upgrade-or-downgrade-my-plan",level:3},{value:"When does my billing period reset?",id:"when-does-my-billing-period-reset",level:3},{value:"How do I cancel my subscription?",id:"how-do-i-cancel-my-subscription",level:3},{value:"Can I pay for a year in advance?",id:"can-i-pay-for-a-year-in-advance",level:3},{value:"What counts as a &quot;patch install&quot; for Shorebird?",id:"what-counts-as-a-patch-install-for-shorebird",level:3}],h={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you have questions not answered here, please ask! Both filing an issue\nor asking on ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/shorebird"},"Discord"),") work."),(0,a.kt)("h3",{id:"what-is-code-push"},'What is "code push"?'),(0,a.kt)("p",null,'Code push, also referred to as "over the air updates" (OTA) is a cloud service\nenabling Flutter developers to deploy updates to their apps in production.\nShorebird currently works on Android and iOS (alpha) and will eventually work\neverywhere Flutter works.'),(0,a.kt)("p",null,'"Code Push" is a reference to the name of a deploy feature used by the React\nNative community from ',(0,a.kt)("a",{parentName:"p",href:"https://appcenter.ms"},"Microsoft")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://expo.dev"},"Expo"),", neither of which support Flutter."),(0,a.kt)("h3",{id:"what-is-the-difference-between-a-patch-and-a-release"},"What is the difference between a patch and a release?"),(0,a.kt)("p",null,'We use the term "release" to mean preparing a binary for the app stores. In\norder to later generate a patch Shorebird needs to know the exact binary that\nwas shipped to the app stores. The ',(0,a.kt)("inlineCode",{parentName:"p"},"shorebird release")," command is used to\nprepare a binary for the app stores which includes the Shorebird updater."),(0,a.kt)("p",null,'We use the term "patch" to mean a binary that can be applied to a release to\nupdate it to new code. The ',(0,a.kt)("inlineCode",{parentName:"p"},"shorebird patch")," command is used to generate\na patch from your new local code which is then diffed with the release binary\nto generate a patch which is then shipped to your users."),(0,a.kt)("p",null,"We explain more of these terms in ",(0,a.kt)("a",{parentName:"p",href:"/concepts"},"Concepts"),"."),(0,a.kt)("h3",{id:"can-i-use-shorebird-in-my-country"},"Can I use Shorebird in my country?"),(0,a.kt)("p",null,"We have not attempted to restrict access to Shorebird from any country."),(0,a.kt)("p",null,"We recognize that some countries have restrictions on what urls can be accessed\nfrom within the country. Shorebird currently uses Google Cloud for hosting,\nincluding Google Cloud Storage and Google Cloud Run."),(0,a.kt)("p",null,"The following URLs are used by Shorebird:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api.shorebird.dev"},"https://api.shorebird.dev")," -- used by the ",(0,a.kt)("inlineCode",{parentName:"li"},"shorebird")," command line tools to\ninteract with the Shorebird servers as well as the Shorbird updater on users'\ndevices to check for updates."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://download.shorebird.dev"},"https://download.shorebird.dev")," -- used by the ",(0,a.kt)("inlineCode",{parentName:"li"},"shorebird")," command line tool to\ndownload Flutter artifacts for building releases and patches."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://storage.googleapis.com"},"https://storage.googleapis.com")," -- used by the ",(0,a.kt)("inlineCode",{parentName:"li"},"shorebird")," command line tool to\nupload and download release and patch artifacts.")),(0,a.kt)("p",null,"If all of those URLs are accessible from your country, then Shorebird should work."),(0,a.kt)("p",null,"If your region requires use of\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/community/china"},"FLUTTER_STORAGE_BASE_URL")," Shorebird\nmay not work for you at this time as we also use that environment variable as\npart of our implementation. We have plans to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/435"},"remove this\nrestriction"),", let us know\nif this is important to you."),(0,a.kt)("h3",{id:"does-shorebird-comply-with-play-store-guidelines"},"Does Shorebird comply with Play Store guidelines?"),(0,a.kt)("p",null,"Yes."),(0,a.kt)("p",null,"The Play Store offers two restrictions relating to update tools."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Updates must use an interpreter or virtual machine (Shorebird\nuses the Dart Virtual Machine).\n",(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/googleplay/android-developer/answer/9888379?hl=en"},"https://support.google.com/googleplay/android-developer/answer/9888379?hl=en"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    An app distributed via Google Play may not modify, replace, or update itself\n    using any method other than Google Play's update mechanism. Likewise, an app\n    may not download executable code (such as dex, JAR, .so files) from a\n    source other than Google Play. *This restriction does not apply to code\n    that runs in a virtual machine or an interpreter* where either provides\n    indirect access to Android APIs (such as JavaScript in a webview or\n    browser).\n\n    Apps or third-party code, like SDKs, with interpreted languages (JavaScript,\n    Python, Lua, etc.) loaded at run time (for example, not packaged with the\n    app) must not allow potential violations of Google Play policies.\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Changes to the app must not be deceptive (e.g. changing the purpose of\nthe app via update).\n",(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/googleplay/android-developer/answer/9888077"},"https://support.google.com/googleplay/android-developer/answer/9888077"),"\nPlease be clear with your users about what you are providing with your\napplication and do not violate their expectations with\nsignificant behavioral changes through the use of Shorebird.")),(0,a.kt)("p",null,"Shorebird is designed to be compatible with the Play Store guidelines. However\nShorebird is a tool, and as with any tool, can be abused. Deliberately abusing\nShorebird to violate Play Store guidelines is in violation of the Shorebird\n",(0,a.kt)("a",{parentName:"p",href:"https://shorebird.dev/terms"},"Terms of Service")," and can result in termination of\nyour account."),(0,a.kt)("p",null,"Code push services are widely used in the industry (all of the large\napps I'm aware of use them) and there are multiple other code push services\npublicly available (e.g. expo.dev & appcenter.ms). This is a well trodden path."),(0,a.kt)("p",null,'Microsoft also publishes a guide on how their React Native "codepush" library\ncomplies with the app stores:\n',(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/react-native-code-push#store-guideline-compliance"},"https://github.com/microsoft/react-native-code-push#store-guideline-compliance")),(0,a.kt)("h3",{id:"does-shorebird-comply-with-app-store-guidelines"},"Does Shorebird comply with App Store guidelines?"),(0,a.kt)("p",null,"Yes."),(0,a.kt)("p",null,"Similar to the Play Store, the App Store offers both technical and policy\nrestrictions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"3.2.2\n... interpreted code may be downloaded to an Application but only so long as\nsuch code:\n(a) does not change the primary purpose of the Application by providing\nfeatures or functionality that are inconsistent with the intended and\nadvertised purpose of the Application as submitted to the App Store,\n(b) does not create a store or storefront for other code or applications, and\n(c) does not bypass signing, sandbox, or other security features of the OS.\n")),(0,a.kt)("p",null,"Shorebird uses a custom Dart interpreter to comply with the interpreter-only\nrestriction for updates on iOS. So long as your application is not engaging\nin deceptive behavior via updates (e.g. changing the purpose of the app via\nupdate), updating via Shorebird (or any other code push solution) is standard\nindustry practice and compliant with App Store guidelines."),(0,a.kt)("p",null,"Deliberately abusing Shorebird to violate App Store guidelines is in violation\nof the Shorebird ",(0,a.kt)("a",{parentName:"p",href:"https://shorebird.dev/terms"},"Terms of Service")," and can result\nin termination of your account."),(0,a.kt)("p",null,'Microsoft also publishes a guide on how their react native "codepush" library\ncomplies with the app stores:\n',(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/react-native-code-push#store-guideline-compliance"},"https://github.com/microsoft/react-native-code-push#store-guideline-compliance")),(0,a.kt)("h3",{id:"what-is-the-roadmap"},"What is the roadmap?"),(0,a.kt)("p",null,"We try to keep: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.shorebird.dev/status"},"https://docs.shorebird.dev/status")," up to date with the status\nof the project."),(0,a.kt)("p",null,"Our project boards are also public an found at:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/shorebirdtech/projects"},"https://github.com/orgs/shorebirdtech/projects")),(0,a.kt)("p",null,"Our team also operates in the public, so you can see what we're working\non at any time. We're happy to answer any questions you have about our roadmap\nor priorities via Github issues or ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/shorebird"},"Discord"),"."),(0,a.kt)("h3",{id:"can-i-self-host-shorebird"},"Can I self-host Shorebird?"),(0,a.kt)("p",null,"Not currently. We intend to offer ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/485"},"cloud-prem and on-prem\nhosting")," as an option on\nenterprise plans. Please contact us if such is required for your adoption."),(0,a.kt)("h3",{id:"can-i-use-shorebird-with-my-team"},"Can I use Shorebird with my team?"),(0,a.kt)("p",null,'Yes! The Shorebird free "Hobby" tier only supports a single developer, but all\nother plans support unlimited developers.'),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/teams"},"Teams")," for more information."),(0,a.kt)("h3",{id:"does-shorebird-store-my-source-code"},"Does Shorebird store my source code?"),(0,a.kt)("p",null,"No. Shorebird servers never see your source code. When you run\n",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird release")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird patch")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird")," tool only uploads the\nsame compiled app binary that you send to the app stores. Shorebird servers\nnever store your source code at any time."),(0,a.kt)("p",null,"See also our privacy policy: ",(0,a.kt)("a",{parentName:"p",href:"https://shorebird.dev/privacy"},"https://shorebird.dev/privacy")),(0,a.kt)("h3",{id:"can-i-use-shorebird-from-my-ci-system"},"Can I use Shorebird from my CI system?"),(0,a.kt)("p",null,"Yes. Shorebird is intended to be used from CI systems. We've published a\nguide for ",(0,a.kt)("a",{parentName:"p",href:"/ci/github"},"Github Actions"),", other CI systems should be similar."),(0,a.kt)("p",null,"Please don't hesitate to reach out over GitHub issues or Discord if you\nencounter any issues."),(0,a.kt)("h3",{id:"how-does-this-relate-to-firebase-remote-config-or-launch-darkly"},"How does this relate to Firebase Remote Config or Launch Darkly?"),(0,a.kt)("p",null,"Code push allows adding new code / replacing code on the device. Firebase\nRemote Config and Launch Darkly are both configuration systems. They allow you\nto change the configuration of your app without having to ship a new version.\nThey are not intended to replace code."),(0,a.kt)("h3",{id:"how-big-of-a-dependency-footprint-does-this-add"},"How big of a dependency footprint does this add?"),(0,a.kt)("p",null,"I haven't measured recently, but I expect the code push library to add less than\none megabyte to Flutter apps. ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter build apk --release")," vs.\n",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird build apk --release")," should give you a rough idea. We know of ways\nwe can make this smaller when that becomes a priority. If size is a blocker\nfor you, please let us know!"),(0,a.kt)("h3",{id:"does-code-push-work-with-large-applications"},"Does code push work with large applications?"),(0,a.kt)("p",null,"Yes. There is no limit on the size of the application that can be patched with\ncode push. As noted ",(0,a.kt)("a",{parentName:"p",href:"#what-types-of-changes-does-shorebird-code-push-support"},"below"),",\nShorebird can change any Dart code in your application no matter of size."),(0,a.kt)("h3",{id:"what-can-i-use-shorebird-code-push-for"},"What can I use Shorebird code push for?"),(0,a.kt)("p",null,"We've seen a variety of uses, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Emergency fixes to production apps."),(0,a.kt)("li",{parentName:"ul"},"Shipping bug fixes to users on older versions of your app."),(0,a.kt)("li",{parentName:"ul"},"Shipping constantly (e.g. every hour).")),(0,a.kt)("p",null,"Note that most app stores prohibit shipping code that changes the behavior of\nthe app in a significant way. Please see\n",(0,a.kt)("a",{parentName:"p",href:"#how-does-this-relate-to-the-appplay-store-review-process-or-policies"},"below"),"\nfor more information."),(0,a.kt)("h3",{id:"what-cant-we-use-shorebird-code-push-for"},"What can't we use Shorebird code push for?"),(0,a.kt)("p",null,"As above, Shorebird should not be used to violate app store polices. Please see\n",(0,a.kt)("a",{parentName:"p",href:"#does-shorebird-comply-with-play-store-guidelines"},"below")," for more information."),(0,a.kt)("p",null,"Also Shorebird does not support changing native code (e.g. Java/Kotlin on\nAndroid or Objective-C/Swift on iOS). The tool will warn you during an\nattempted patch if you have changed native code."),(0,a.kt)("h3",{id:"can-i-use-shorebird-for-all-my-dart-changes"},"Can I use Shorebird for all my Dart changes?"),(0,a.kt)("p",null,'Shorebird can be used to update any Dart code including pure Dart packages. Note\nthat depending on how you distribute your apps, some store agreements expect\nfeature changes to go through store review. Notably Apple\'s App Store requires\nthat an update "does not change the primary purpose of the Application by\nproviding features or functionality that are inconsistent with the intended and\nadvertised purpose of the Application." Also note that patch sizes correlate\nwith the total amount of Dart changed from the original released app. Each patch\nis a diff against the released dart code, not a diff to the previous patch.'),(0,a.kt)("h3",{id:"does-shorebird-submit-to-the-stores-for-me"},"Does Shorebird submit to the stores for me?"),(0,a.kt)("p",null,"Shorebird does not currently support submitting to the app stores on your\nbehalf. We have plans to add this in the future, but for now you will need to\ncontinue to use your existing processes to submit to the app stores.\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/257"},"https://github.com/shorebirdtech/shorebird/issues/257")),(0,a.kt)("h3",{id:"what-does-shorebird-store-on-disk-and-where"},"What does Shorebird store on disk and where?"),(0,a.kt)("p",null,"The Shorebird updater (included in your application when you build your app with\nShorebird) caches the latest downloaded patch in the same cache directory that\nFlutter uses for caching compiled shaders or compiled Dart code. On Android,\nthis is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/user/0/com.example.app/code_cache/shorebird_updater"),"\nalthough the base of that path is provided by the Android system and can change\ndynamically at runtime. On iOS devices, data is stored under\n",(0,a.kt)("inlineCode",{parentName:"p"},"Library/Application Support/shorebird"),"."),(0,a.kt)("p",null,"The Shorebird command line tools (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird patch"),") are installed on disk\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.shorebird"),", including bringing a copy of Flutter and Dart as well as\nthe Shorebird release tools themselves. This is similar to how the ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter"),"\ncommand works."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/uninstall"},"Uninstall")," has details on how to remove Shorebird from your\nsystem should you choose."),(0,a.kt)("h3",{id:"how-does-this-relate-to-flutter-hot-reload"},"How does this relate to Flutter Hot Reload?"),(0,a.kt)("p",null,"Flutter's Hot reload is a development-time-only feature. Code push is for\nproduction."),(0,a.kt)("p",null,"Hot reload is a feature of Flutter that allows you to change code on the device\nduring development. It requires building the Flutter engine with a debug-mode\nDart VM which includes a just-in-time (JIT) Dart compiler."),(0,a.kt)("p",null,"Code push is a feature that allows you to change code on the device in\nproduction. We will use a variety of different techniques to make this possible\ndepending on the platform. Current demos execute ahead-of-time compiled Dart\ncode and do not require a JIT Dart compiler."),(0,a.kt)("h3",{id:"what-types-of-changes-does-shorebird-code-push-support"},"What types of changes does Shorebird code push support?"),(0,a.kt)("p",null,"Shorebird can change any Dart code in your application. This includes app code\nand generated code. You can also update dependencies in ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," as long\nas they don't require native code changes."),(0,a.kt)("p",null,"We have plans to support changing Flutter asset files (from pubspec.yaml) in the\nnear future: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/318"},"https://github.com/shorebirdtech/shorebird/issues/318")),(0,a.kt)("p",null,"We do not have plans to support changing native code (e.g. Java/Kotlin on\nAndroid or Objective-C/Swift on iOS), and the tool will warn you if it detects\nthat you have changed native code as it will not be included in the patch."),(0,a.kt)("h3",{id:"does-shorebird-support-flutter-web"},"Does Shorebird support Flutter Web?"),(0,a.kt)("p",null,"Code push isn't needed for Flutter web. When a user opens a web app it downloads\nthe latest version from the server if needed."),(0,a.kt)("p",null,"If you have a use case for code push with Fluter web, we'd\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/new?assignees=&labels=feature&template=feature_request.md&title=feat%3A+"},"love to know"),"!"),(0,a.kt)("h3",{id:"what-platforms-does-shorebird-support"},"What platforms does Shorebird support?"),(0,a.kt)("p",null,"Shorebird supports iOS and Android today. We plan to support all other Flutter\nplatforms over time."),(0,a.kt)("p",null,"Use of Shorebird on each platform is an independent decision. For example You can\nuse ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird release")," to ship to Google Play and an ipa built with\n",(0,a.kt)("inlineCode",{parentName:"p"},"flutter build")," to the App Store or vice versa."),(0,a.kt)("p",null,"Shorebird can (relatively easily) be made to support\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/397"},"desktop")," or embedded\ntargets. If those are important to you, please let us know."),(0,a.kt)("h3",{id:"what-os-versions-does-shorebird-support"},"What OS versions does Shorebird support?"),(0,a.kt)("p",null,"Shorebird supports the same versions of Android that Flutter supports."),(0,a.kt)("p",null,"Flutter currently supports Android API level 21+ and iOS 16.0+:\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.flutter.dev/reference/supported-platforms"},"https://docs.flutter.dev/reference/supported-platforms")),(0,a.kt)("h3",{id:"what-versions-of-flutter-does-shorebird-support"},"What versions of Flutter does Shorebird support?"),(0,a.kt)("p",null,"Android is supported on Flutter 3.10.0 or later."),(0,a.kt)("p",null,"iOS is supported on Flutter 3.16.9 or later."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.shorebird.dev/flutter-version"},"https://docs.shorebird.dev/flutter-version")," for more information."),(0,a.kt)("p",null,"Shorebird tracks Flutter stable and generally updates within a few hours of\nany stable release. Our system for doing these updates is automated takes\na few minutes to run. We then do an extra manual verification step before\npublishing to our servers."),(0,a.kt)("h3",{id:"does-code-push-require-the-internet-to-work"},"Does code push require the internet to work?"),(0,a.kt)("p",null,"Yes. One could imagine running a server to distribute the updates separately\nfrom the general internet, but some form of network connectivity is required to\ntransport updates to the devices."),(0,a.kt)("h3",{id:"how-is-shorebird-affected-by-lack-of-network-connectivity"},"How is Shorebird affected by lack of network connectivity?"),(0,a.kt)("p",null,"Shorebird updater (included in your application when you build your app with\nShorebird) is designed to be resilient to network connectivity issues."),(0,a.kt)("p",null,"In the default update behavior, when the\napplication launches it alerts the Shorebird updater, which spawns a separate\nthread to make a network request to Shorebird's servers and ask for an update.\nWe intentionally use a separate thread to avoid affecting blocking anything else\nthe application might be doing. If the network request fails or times out, the\nupdater will simply try to check again next time the application launches."),(0,a.kt)("p",null,"Shorebird command line tools (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird patch"),") require network\nconnectivity to function. If you are using Shorebird to distribute your app,\nyou should ensure that your CI system has network connectivity."),(0,a.kt)("h3",{id:"what-happens-if-a-user-doesnt-update-for-a-long-time-and-misses-an-update"},"What happens if a user doesn't update for a long time and misses an update?"),(0,a.kt)("p",null,'Our implementation always sends an update specifically tailored for the device\nthat is requesting it updating the requestor always to the latest version\navailable. Thus if a user doesn\'t update for a while they will "miss"\nintermediate updates.'),(0,a.kt)("p",null,"The update server could be changed to support responding with either the next\nincremental version or the latest version depending on your application's needs.\nPlease let us know if alternative update behaviors are important to you."),(0,a.kt)("h3",{id:"how-does-shorebird-relate-to-flutter"},"How does Shorebird relate to Flutter?"),(0,a.kt)("p",null,"Shorebird is a fork of Flutter that adds code push. Shorebird is not a\nreplacement for Flutter, but rather a replacement for the Flutter engine. You\ncan continue to use the Flutter tooling you already know and love."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"shorebird")," uses a fork of Flutter that includes the Shorebird updater. We track\nthe latest stable release of Flutter and replace a few of the Flutter engine\nfiles with our modified copies."),(0,a.kt)("p",null,"To implement our fork, we use ",(0,a.kt)("inlineCode",{parentName:"p"},"FLUTTER_STORAGE_BASE_URL")," to point to\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://download.shorebird.dev")," instead of download.flutter.dev. We pass\nthrough unmodified output from the ",(0,a.kt)("inlineCode",{parentName:"p"},"flutter")," tool so you will see a warning from\nFlutter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Flutter assets will be downloaded from http://download.shorebird.dev. Make sure you trust this source!\n")),(0,a.kt)("p",null,"For more information about why we had to fork Flutter see\n",(0,a.kt)("a",{parentName:"p",href:"/architecture"},"architecture.md"),"."),(0,a.kt)("h3",{id:"when-do-updates-happen"},"When do updates happen?"),(0,a.kt)("p",null,"By default, the Shorebird updater checks for updates on app startup. It runs on\na background thread and does not block the UI thread. Any updates will be\ninstalled while the user is using the app and will be applied the next time the\napp is restarted."),(0,a.kt)("p",null,"It is also possible to run the Shorebird updater manually using\n",(0,a.kt)("a",{parentName:"p",href:"https://pub.dev/packages/shorebird_code_push"},"package:shorebird_code_push"),",\nthrough which it is possible to trigger updates at any time, including via\na push notification."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/update-strategies"},"update-strategies")," for more information about how\nto configure this behavior."),(0,a.kt)("h3",{id:"do-i-need-to-keep-my-app_id-secret"},"Do I need to keep my app_id secret?"),(0,a.kt)("p",null,"No. The ",(0,a.kt)("inlineCode",{parentName:"p"},"app_id")," is included in your app and is safe to be public. You can\ncheck it into version control (even publicly) and not worry about someone\nelse accessing it."),(0,a.kt)("p",null,"Someone who has your ",(0,a.kt)("inlineCode",{parentName:"p"},"app_id")," can fetch the latest version of your app from\nShorebird servers, but they cannot push updates to your app or access any\nother aspect of your Shorebird account."),(0,a.kt)("h3",{id:"can-i-use-dart-defines-with-shorebird"},"Can I use Dart defines with Shorebird?"),(0,a.kt)("p",null,"Yes. The ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird")," command line tool passes through all Dart defines to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"flutter")," tool. For example,\n",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird release android -- --dart-define=MY_DEFINE=foo")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird release android -- --dart-define-from-file=config.json")," will both\nwork as expected. Because Dart defines are compiled into your app's Dart code,\nthey can be updated via patches."),(0,a.kt)("h3",{id:"what-information-is-sent-to-shorebird-servers"},"What information is sent to Shorebird servers?"),(0,a.kt)("p",null,"Although Shorebird connects to the network, it does not send any personally\nidentifiable information. Including Shorebird should not affect your\ndeclarations for the Play Store or App Store."),(0,a.kt)("p",null,"See also our privacy policy: ",(0,a.kt)("a",{parentName:"p",href:"https://shorebird.dev/privacy"},"https://shorebird.dev/privacy")),(0,a.kt)("p",null,"Requests sent from the app to Shorebird servers include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"app_id (specified ",(0,a.kt)("inlineCode",{parentName:"li"},"shorebird.yaml"),")"),(0,a.kt)("li",{parentName:"ul"},"channel (optional in ",(0,a.kt)("inlineCode",{parentName:"li"},"shorebird.yaml"),")"),(0,a.kt)("li",{parentName:"ul"},"release_version (versionName from AndroidManifest.xml)"),(0,a.kt)("li",{parentName:"ul"},"patch_number (generated as part of ",(0,a.kt)("inlineCode",{parentName:"li"},"shorebird patch android"),")"),(0,a.kt)("li",{parentName:"ul"},"arch (e.g. 'aarch64', needed to send down the right patch)"),(0,a.kt)("li",{parentName:"ul"},"platform (e.g. 'android', needed to send down the right patch)")),(0,a.kt)("p",null,"That's it. The code for this is in:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/updater/blob/main/library/src/network.rs"},"https://github.com/shorebirdtech/updater/blob/main/library/src/network.rs")),(0,a.kt)("h3",{id:"how-does-shorebird-interact-with-play-testing-tracks-or-apple-testflight"},"How does Shorebird interact with Play Testing Tracks or Apple TestFlight?"),(0,a.kt)("p",null,'Each of the app stores have separate mechanisms for distributing apps to limited\ngroups of users (e.g. "internal testing", "closed beta", etc.). These are all\nmechanisms for segmenting your users into groups and distributing specific\nversions of your apps to each.'),(0,a.kt)("p",null,"Unfortunately, these not all of these mechanisms allow 3rd parties to detect\nwhen apps are installed in any specific Test Track or via TestFlight. Thus, we\ndo not have reliable visibility into composition of these groups, and cannot\nreliably gate access to Shorebird patches based on these groups.\n",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/53291007/can-an-android-application-identify-the-test-track-within-google-play"},"https://stackoverflow.com/questions/53291007/can-an-android-application-identify-the-test-track-within-google-play"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/26081543/how-to-tell-at-runtime-whether-an-ios-app-is-running-through-a-testflight-beta-i"},"https://stackoverflow.com/questions/26081543/how-to-tell-at-runtime-whether-an-ios-app-is-running-through-a-testflight-beta-i")),(0,a.kt)("p",null,"If you'd like to segment availability of Shorebird patches, there are 4 potential options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use separate binaries / bundle ids for each group. This is the most\nstraightforward approach, but requires you to manage multiple binaries.\nOn Android the easy way to accomplish this is through flavors. You may\nalready have a dev flavor and prod flavor with different availability. You\ncan thus patch your dev flavor, verify it and then separately patch your\nprod flavor. We recommend using branches / tags in your version control\nto help keep track of the sources associated with each release."),(0,a.kt)("li",{parentName:"ol"},"Track your own set of opt-in users, disable automatic updates, and trigger\nupdates only for certain users via package:shorebird_code_push. This works\ntoday, but requires you to manage your own opt-in list."),(0,a.kt)("li",{parentName:"ol"},"Shorebird could create its own opt-in mechanism on a per-device basis\n(similar to Test Tracks or TestFlight, just platform agnostic). This\ncould allow your QA team to opt-in to patches before they're promoted to\nthe general public. If this is important to you, please let us know:\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/498"},"https://github.com/shorebirdtech/shorebird/issues/498")),(0,a.kt)("li",{parentName:"ol"},"Shorebird plans to add percentage based rollouts. This does not let you\nchoose which devices to send to, but can help you roll out incrementally\nand roll-back on sight of any problems.\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/shorebirdtech/shorebird/issues/497"},"https://github.com/shorebirdtech/shorebird/issues/497"))),(0,a.kt)("h2",{id:"billing"},"Billing"),(0,a.kt)("h3",{id:"how-do-i-upgrade-or-downgrade-my-plan"},"How do I upgrade or downgrade my plan?"),(0,a.kt)("p",null,"You can upgrade or downgrade your plan at any time by running ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird\naccount upgrade")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird account downgrade"),"."),(0,a.kt)("h3",{id:"when-does-my-billing-period-reset"},"When does my billing period reset?"),(0,a.kt)("p",null,"Billing periods are reset automatically every month on the month you first\nsubscribed to Shorebird. For example, if you subscribed on the 15th of the\nmonth, your billing period will reset on the 15th of every month."),(0,a.kt)("h3",{id:"how-do-i-cancel-my-subscription"},"How do I cancel my subscription?"),(0,a.kt)("p",null,"You can cancel your subscription at any time by running ",(0,a.kt)("inlineCode",{parentName:"p"},"shorebird account\ndowngrade"),". You will continue to have all the features of a paid account until\nthe end of your billing period."),(0,a.kt)("h3",{id:"can-i-pay-for-a-year-in-advance"},"Can I pay for a year in advance?"),(0,a.kt)("p",null,"Currently we have not yet implemented yearly billing. We don't expect it\nwill be hard, we just aren't quite sure what customers expect in terms\nof overage charges on a yearly plan. If you have thoughts on this, please\nlet us know:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shorebirdtech/shorebird/issues/733"},"https://github.com/shorebirdtech/shorebird/issues/733")),(0,a.kt)("h3",{id:"what-counts-as-a-patch-install-for-shorebird"},'What counts as a "patch install" for Shorebird?'),(0,a.kt)("p",null,'A "patch install" is counted when a patch is successfully installed on a\nuser\'s device.'))}u.isMDXComponent=!0}}]);