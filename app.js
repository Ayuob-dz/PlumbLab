import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js";

const translations = {
 ar:{tagline:"مختبر التركيب الصحي والغاز",prototype:"نسخة تجريبية",workspace:"مساحة التعلم",simulator:"المحاكي ثلاثي الأبعاد",library:"مكتبة القطع",lessons:"الدروس",safety:"السلامة المهنية",learningPath:"مسار المتعلم",learningDesc:"ابدأ بالتعرف على مكونات شبكة المياه قبل الانتقال إلى التمارين.",progress:"التقدم: 0%",trainingEnvironment:"بيئة تدريب افتراضية",title:"ورشة التركيب الصحي",subtitle:"استكشف شبكة المياه ثلاثية الأبعاد وتعرّف على مكوناتها.",houseModel:"نموذج شبكة منزلية",rotateHint:"اسحب للتدوير • قرّب وأبعد للتحكم",reset:"إعادة العرض",cold:"ماء بارد",hot:"ماء ساخن",drain:"صرف صحي",sceneReady:"النموذج جاهز للاستكشاف. اختر أحد المكونات.",showCold:"الماء البارد",showHot:"الماء الساخن",showDrain:"الصرف",showFixtures:"التجهيزات",componentInfo:"معلومات المكوّن",selectPart:"اختر قطعة من النموذج",selectDesc:"انقر على أحد الأنابيب أو العناصر الملونة لعرض شرح تعليمي.",system:"النظام",purpose:"الوظيفة",trainingTip:"نصيحة تدريبية",tipText:"ميّز دائماً بين مسار التغذية بالماء ومسار الصرف، وراجع الرموز قبل قراءة المخططات.",reference:"مرجع سريع",libraryTitle:"مكتبة القطع والأدوات",librarySub:"تعرف على أشهر العناصر المستخدمة في أعمال التركيب الصحي.",learnStep:"تعلم خطوة بخطوة",lessonsTitle:"الدروس الأساسية",lessonsSub:"محتوى تمهيدي نظري قبل الانتقال إلى التدريب العملي مع مختص.",priority:"الأولوية دائماً",safetyTitle:"السلامة المهنية",safetySub:"مبادئ عامة للتوعية. لا تنفذ أعمال الغاز أو الاختبارات الحقيقية بنفسك.",gasWarning:"تنبيه مهم بشأن الغاز",gasWarningText:"هذا المحاكي للتعلم النظري فقط. تركيب أنابيب الغاز، تعديلها، تشغيل الأجهزة أو اختبار التسرب يجب أن يقوم به مهني مؤهل وفق القوانين والمعايير المحلية. لا تستخدم هذا النموذج كتعليمات تنفيذية.",footer:"نموذج تعليمي أولي — ليس بديلاً عن التكوين المهني والإشراف المختص.",quiz:"اختبر معلوماتك",showFittings:"القطع والوصلات",searchParts:"ابحث عن قطعة أو وصلة...",practice:"تدريب وتقييم",quizTitle:"اختبر معلوماتك",quizSub:"أسئلة قصيرة حول مكونات شبكات المياه والصرف.",notStarted:"لم تبدأ بعد",nextQuestion:"السؤال التالي",restartQuiz:"إعادة الاختبار",correct:"إجابة صحيحة! أحسنت.",wrong:"ليست هذه الإجابة الصحيحة. حاول في السؤال التالي.",finish:"انتهى الاختبار",scoreLabel:"النتيجة",completed:"مكتمل",markDone:"تم الدرس",lessonDone:"أنهيت هذا الدرس",partsFound:"قطعة",noParts:"لا توجد نتائج مطابقة."},
 fr:{tagline:"Laboratoire plomberie et gaz",prototype:"Prototype",workspace:"Espace d’apprentissage",simulator:"Simulateur 3D",library:"Bibliothèque",lessons:"Leçons",safety:"Sécurité",learningPath:"Parcours apprenant",learningDesc:"Découvrez les composants du réseau d’eau avant les exercices.",progress:"Progression : 0%",trainingEnvironment:"Environnement de formation virtuel",title:"Atelier de plomberie",subtitle:"Explorez le réseau d’eau en 3D et découvrez ses composants.",houseModel:"Réseau domestique",rotateHint:"Glisser pour tourner • Zoomer pour contrôler",reset:"Réinitialiser",cold:"Eau froide",hot:"Eau chaude",drain:"Évacuation",sceneReady:"Modèle prêt. Sélectionnez un composant.",showCold:"Eau froide",showHot:"Eau chaude",showDrain:"Évacuation",showFixtures:"Équipements",componentInfo:"Informations du composant",selectPart:"Sélectionnez une pièce",selectDesc:"Cliquez sur un tuyau ou un élément coloré pour voir sa description.",system:"Système",purpose:"Fonction",trainingTip:"Conseil pédagogique",tipText:"Distinguez le réseau d’alimentation en eau du réseau d’évacuation.",reference:"Référence rapide",libraryTitle:"Pièces et outils",librarySub:"Découvrez les éléments courants de la plomberie.",learnStep:"Apprendre étape par étape",lessonsTitle:"Leçons fondamentales",lessonsSub:"Notions théoriques avant la pratique encadrée.",priority:"Priorité absolue",safetyTitle:"Sécurité professionnelle",safetySub:"Informations générales. N’effectuez pas vous-même de travaux ou tests de gaz.",gasWarning:"Avertissement concernant le gaz",gasWarningText:"Ce simulateur est uniquement théorique. L’installation, la modification, la mise en service et les essais de gaz doivent être réalisés par un professionnel qualifié selon les règles locales. Ce modèle n’est pas une procédure d’intervention.",footer:"Prototype pédagogique — ne remplace pas la formation professionnelle ni l’encadrement.",quiz:"Quiz",showFittings:"Raccords",searchParts:"Rechercher une pièce...",practice:"Entraînement et évaluation",quizTitle:"Testez vos connaissances",quizSub:"Questions courtes sur les réseaux d’eau et d’évacuation.",notStarted:"Pas encore commencé",nextQuestion:"Question suivante",restartQuiz:"Recommencer",correct:"Bonne réponse ! Bravo.",wrong:"Ce n’est pas la bonne réponse. Continuez.",finish:"Quiz terminé",scoreLabel:"Résultat",completed:"Terminé",markDone:"Terminer la leçon",lessonDone:"Leçon terminée",partsFound:"pièces",noParts:"Aucun résultat."},
 en:{tagline:"Plumbing & gas learning lab",prototype:"Prototype",workspace:"Learning space",simulator:"3D simulator",library:"Parts library",lessons:"Lessons",safety:"Safety",learningPath:"Learning path",learningDesc:"Learn the water-network components before trying the exercises.",progress:"Progress: 0%",trainingEnvironment:"Virtual training environment",title:"Plumbing workshop",subtitle:"Explore the 3D water network and learn its components.",houseModel:"Domestic network model",rotateHint:"Drag to rotate • Scroll to zoom",reset:"Reset view",cold:"Cold water",hot:"Hot water",drain:"Drainage",sceneReady:"Model ready. Select a component.",showCold:"Cold water",showHot:"Hot water",showDrain:"Drainage",showFixtures:"Fixtures",componentInfo:"Component information",selectPart:"Select a component",selectDesc:"Click a pipe or colored element to view its learning notes.",system:"System",purpose:"Purpose",trainingTip:"Training tip",tipText:"Always distinguish water-supply routes from drainage routes and review symbols before reading plans.",reference:"Quick reference",libraryTitle:"Parts & tools library",librarySub:"Explore common components used in plumbing.",learnStep:"Learn step by step",lessonsTitle:"Core lessons",lessonsSub:"Introductory theory before supervised practical training.",priority:"Always the priority",safetyTitle:"Professional safety",safetySub:"General awareness only. Do not perform gas work or real tests yourself.",gasWarning:"Important gas safety notice",gasWarningText:"This simulator is theory-only. Gas installation, modification, appliance commissioning and leak testing must be performed by a qualified professional under local codes. Do not use this model as work instructions.",footer:"Educational prototype — not a substitute for vocational training or qualified supervision.",quiz:"Knowledge check",showFittings:"Fittings",searchParts:"Search parts and fittings...",practice:"Practice and review",quizTitle:"Test your knowledge",quizSub:"Quick questions about water supply and drainage systems.",notStarted:"Not started",nextQuestion:"Next question",restartQuiz:"Restart quiz",correct:"Correct answer! Well done.",wrong:"That is not the correct answer. Keep going.",finish:"Quiz complete",scoreLabel:"Score",completed:"Completed",markDone:"Complete lesson",lessonDone:"Lesson completed",partsFound:"parts",noParts:"No matching parts."}
};

Object.assign(translations.ar,{showWalls:"الجدران",guidedMode:"تعلم موجه",freeMode:"استكشاف حر",frontView:"أمامي",topView:"علوي",guidedLabel:"خطوة تعليمية",nextStep:"الخطوة التالية",step1Title:"التعرف على مساحة الحمام",step1Text:"لاحظ الأرضية والجدران والتجهيزات الصحية قبل استكشاف الشبكات.",step2Title:"التعرف على التجهيزات",step2Text:"اختر الحوض أو المرحاض أو منطقة الدش لقراءة وظيفتها.",step3Title:"تمييز شبكات التغذية",step3Text:"أظهر الماء البارد والساخن ولاحظ اختلاف المسارين في النموذج.",step4Title:"تمييز شبكة الصرف",step4Text:"أخفِ شبكات التغذية وأظهر الصرف لتتبع مسار المياه المستعملة.",freeHint:"أنت الآن في وضع الاستكشاف الحر. أظهر الطبقات واختر أي عنصر لاستكشافه."});
Object.assign(translations.fr,{showWalls:"Murs",guidedMode:"Guidage",freeMode:"Exploration libre",frontView:"Face",topView:"Dessus",guidedLabel:"Étape guidée",nextStep:"Étape suivante",step1Title:"Découvrir la pièce",step1Text:"Observez le sol, les murs et les équipements sanitaires.",step2Title:"Identifier les équipements",step2Text:"Sélectionnez le lavabo, les toilettes ou la douche pour découvrir leur fonction.",step3Title:"Distinguer l’alimentation",step3Text:"Affichez l’eau froide et l’eau chaude pour comparer les deux réseaux schématiques.",step4Title:"Comprendre l’évacuation",step4Text:"Masquez l’alimentation et affichez l’évacuation des eaux usées.",freeHint:"Mode exploration libre : affichez les couches et sélectionnez les éléments."});
Object.assign(translations.en,{showWalls:"Walls",guidedMode:"Guided learning",freeMode:"Free explore",frontView:"Front",topView:"Top",guidedLabel:"Guided step",nextStep:"Next step",step1Title:"Explore the bathroom",step1Text:"Observe the floor, walls and sanitary fixtures before exploring the networks.",step2Title:"Identify the fixtures",step2Text:"Select the basin, toilet or shower to learn its purpose.",step3Title:"Distinguish supply routes",step3Text:"Show cold and hot water to compare the two schematic routes.",step4Title:"Understand drainage",step4Text:"Hide the supply routes and show the wastewater drainage route.",freeHint:"Free exploration mode: toggle layers and select any component."});

// Part metadata for the interactive workshop is defined with the scene below.

const lessons = [
 {title:{ar:"مقدمة في شبكات المياه",fr:"Introduction aux réseaux d’eau",en:"Introduction to water networks"},body:{ar:"الفرق بين شبكة التغذية بالماء البارد والساخن وشبكة الصرف الصحي، مع التعرف على رموز المخططات.",fr:"Différence entre alimentation froide, eau chaude et évacuation, avec les symboles des plans.",en:"Understand cold supply, hot-water supply and drainage, plus common plan symbols."}},
 {title:{ar:"أنواع الأنابيب والمواد",fr:"Types de tubes et matériaux",en:"Pipe types and materials"},body:{ar:"التعرف النظري على PVC وPPR والأنابيب متعددة الطبقات والنحاس، ومجالات استعمالها العامة.",fr:"Découverte théorique du PVC, PPR, multicouche et cuivre et de leurs usages généraux.",en:"A theory-focused overview of PVC, PPR, multilayer and copper pipes and their general uses."}},
 {title:{ar:"القطع والوصلات",fr:"Raccords et accessoires",en:"Fittings and accessories"},body:{ar:"أسماء الأكواع والتيات والمخفضات والصمامات ووظيفة كل عنصر في المخطط.",fr:"Noms et rôles des coudes, tés, réductions et vannes sur un schéma.",en:"Names and roles of elbows, tees, reducers and valves on a diagram."}},
 {title:{ar:"قراءة مخطط صحي",fr:"Lire un plan sanitaire",en:"Reading a plumbing plan"},body:{ar:"التعرف على الرموز والتمييز بين مسارات التغذية والصرف قبل دراسة أي مخطط.",fr:"Reconnaître les symboles et distinguer alimentation et évacuation.",en:"Recognize symbols and distinguish supply from drainage routes."}}
];
const catalog = [
 ["⟋","PVC", {ar:"أنبوب يستخدم في تطبيقات صرف وتهوية محددة حسب المواصفات.",fr:"Tube utilisé pour certaines applications d’évacuation selon les normes.",en:"Used in selected drainage and vent applications according to standards."}],
 ["◎","PPR",{ar:"مادة شائعة في شبكات توزيع المياه داخل المباني.",fr:"Matériau courant pour la distribution d’eau dans les bâtiments.",en:"A common material for building water distribution."}],
 ["⌁","Multicouche",{ar:"أنبوب متعدد الطبقات يجمع خصائص مواد مختلفة.",fr:"Tube multicouche combinant les propriétés de plusieurs matériaux.",en:"A multilayer pipe combining properties of different materials."}],
 ["⊣","صمام / Vanne",{ar:"عنصر للتحكم في مرور السائل ضمن نظام مصمم بشكل صحيح.",fr:"Élément de commande du passage du fluide dans un système conçu correctement.",en:"Controls fluid passage in a properly designed system."}],
 ["⊔","سيفون / Siphon",{ar:"يساعد تصميمه على الحد من رجوع الروائح من شبكة الصرف.",fr:"Sa conception aide à limiter le retour des odeurs d’évacuation.",en:"Its design helps prevent drainage odors from returning."}],
 ["⚙","مضخة / Pompe",{ar:"جهاز ميكانيكي لتحريك السوائل ضمن نظام مناسب.",fr:"Appareil mécanique qui déplace les liquides dans un système adapté.",en:"A mechanical device that moves liquids in a suitable system."}]
];
const safety = [
 ["🦺",{ar:"معدات الوقاية",fr:"Équipements de protection",en:"Protective equipment"},{ar:"استخدم معدات الوقاية المناسبة في الورشة، واتبع تعليمات المدرب.",fr:"Utilisez les équipements adaptés et suivez les consignes du formateur.",en:"Use suitable protective equipment and follow the instructor’s guidance."}],
 ["💧",{ar:"الماء والكهرباء",fr:"Eau et électricité",en:"Water and electricity"},{ar:"تجنب العمل قرب تجهيزات كهربائية رطبة، واترك العزل والفحص للمختص.",fr:"Évitez les équipements électriques humides ; confiez l’inspection à un spécialiste.",en:"Avoid wet electrical equipment; leave inspection to a qualified person."}],
 ["🔥",{ar:"الغاز والتهوية",fr:"Gaz et ventilation",en:"Gas and ventilation"},{ar:"تعرف على مخاطر الغاز وأهمية التهوية وكاشف أول أكسيد الكربون. عند الاشتباه بتسرب، ابتعد واتصل بالطوارئ أو الجهة المختصة.",fr:"Connaissez les risques du gaz, la ventilation et le détecteur de CO. En cas de suspicion de fuite, éloignez-vous et contactez les services compétents.",en:"Learn gas hazards, ventilation and carbon-monoxide alarms. If a leak is suspected, move away and contact emergency or qualified services."}],
 ["📋",{ar:"العمل تحت الإشراف",fr:"Travail encadré",en:"Supervised work"},{ar:"التطبيق العملي يكون في مركز تكوين أو ورشة وتحت إشراف مهني مؤهل.",fr:"La pratique se fait en centre de formation ou atelier sous supervision qualifiée.",en:"Practical work belongs in a training center or workshop under qualified supervision."}]
];

let lang="ar";
const $=s=>document.querySelector(s);
function renderText(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(translations[lang][k])el.textContent=translations[lang][k]});
 document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{const k=el.dataset.i18nPlaceholder;if(translations[lang][k])el.placeholder=translations[lang][k]});
 renderCatalog();renderLessons();renderSafety();
}
function renderCatalog(){ $("#catalog").innerHTML=catalog.map(c=>`<article class="catalog-card"><div class="symbol">${c[0]}</div><h3>${c[1]}</h3><p>${c[2][lang]}</p></article>`).join("");}
function renderLessons(){ $("#lessonList").innerHTML=lessons.map((l,i)=>`<article class="lesson-card"><span class="lesson-num">${String(i+1).padStart(2,"0")}</span><div><h3>${l.title[lang]}</h3><p>${l.body[lang]}</p></div></article>`).join("");}
function renderSafety(){ $("#safetyCards").innerHTML=safety.map(c=>`<article class="safety-card"><h3>${c[0]} ${c[1][lang]}</h3><p>${c[2][lang]}</p></article>`).join("");}
$("#language").addEventListener("change",e=>{lang=e.target.value;renderText();if(typeof updateGuidedPanel==="function")updateGuidedPanel();});
document.querySelectorAll(".nav-item").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".nav-item").forEach(b=>b.classList.remove("active"));document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));btn.classList.add("active");$("#"+btn.dataset.section).classList.add("active");if(window.__resizeScene)window.__resizeScene();}));

// Interactive 3D bathroom workshop. Schematic learning model only.
const container=$("#scene");
const scene=new THREE.Scene();scene.background=new THREE.Color(0x0c1b2b);
const camera=new THREE.PerspectiveCamera(42,container.clientWidth/container.clientHeight,.1,100);camera.position.set(7,5.6,8);
const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(container.clientWidth,container.clientHeight);renderer.shadowMap.enabled=true;renderer.outputColorSpace=THREE.SRGBColorSpace;container.appendChild(renderer.domElement);
const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.07;controls.target.set(0,1.15,0);controls.minDistance=4;controls.maxDistance=16;
scene.add(new THREE.HemisphereLight(0xc9e8ff,0x243348,2));
const light=new THREE.DirectionalLight(0xffffff,2.2);light.position.set(5,8,6);light.castShadow=true;scene.add(light);
const floor=new THREE.Mesh(new THREE.PlaneGeometry(9,8),new THREE.MeshStandardMaterial({color:0x24384a,roughness:.9}));floor.rotation.x=-Math.PI/2;floor.position.y=-.07;floor.receiveShadow=true;scene.add(floor);
const grid=new THREE.GridHelper(9,18,0x49627a,0x2c4359);grid.position.y=-.045;scene.add(grid);
const raycaster=new THREE.Raycaster(),mouse=new THREE.Vector2();
const layerGroups={walls:new THREE.Group(),cold:new THREE.Group(),hot:new THREE.Group(),drain:new THREE.Group(),fixtures:new THREE.Group(),fittings:new THREE.Group()};
Object.values(layerGroups).forEach(g=>scene.add(g));
const selectable=[];
function material(color,metalness=.15){return new THREE.MeshStandardMaterial({color,metalness,roughness:.38});}
function addPipe(group,a,b,r,color,id){const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),dir=end.clone().sub(start);const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,dir.length(),18),material(color,.28));mesh.position.copy(start).add(end).multiplyScalar(.5);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),dir.normalize());mesh.castShadow=true;mesh.userData={id};group.add(mesh);selectable.push(mesh);return mesh;}
function addBox(group,x,y,z,sx,sy,sz,color,id){const m=new THREE.Mesh(new THREE.BoxGeometry(sx,sy,sz),material(color));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;if(id){m.userData={id};selectable.push(m);}group.add(m);return m;}
function addCylinder(group,x,y,z,r1,r2,h,color,id){const m=new THREE.Mesh(new THREE.CylinderGeometry(r1,r2,h,28),material(color));m.position.set(x,y,z);m.castShadow=true;if(id){m.userData={id};selectable.push(m);}group.add(m);return m;}
// Two partial walls create an open-front bathroom so the learner can inspect the systems.
addBox(layerGroups.walls,0,1.55,-2.35,5.4,3.1,.12,0xd6e0e5);
addBox(layerGroups.walls,-2.65,1.55,0,.12,3.1,4.8,0xd6e0e5);
// Subtle tile seams give the open-front room a more realistic architectural scale.
for(let y=.38;y<3.0;y+=.42){addBox(layerGroups.walls,0,y,-2.282,5.35,.012,.012,0xa9bbc5);addBox(layerGroups.walls,-2.582,y,0,.012,.012,4.72,0xa9bbc5);}
for(let x=-2.35;x<2.5;x+=.55)addBox(layerGroups.walls,x,1.55,-2.281,.012,3.0,.012,0xa9bbc5);
for(let z=-2.1;z<2.3;z+=.55)addBox(layerGroups.walls,-2.581,1.55,z,.012,3.0,.012,0xa9bbc5);
// Small high window on the back wall.
addBox(layerGroups.walls,1.65,2.35,-2.265,1.15,.62,.035,0x8fc6df);
addBox(layerGroups.walls,1.65,2.35,-2.235,1.22,.07,.035,0xe8f2f5);
addBox(layerGroups.walls,1.65,2.35,-2.235,.07,.68,.035,0xe8f2f5);
// Basin and vanity
addBox(layerGroups.fixtures,-1.45,.48,1.25,1.35,.9,.78,0x71889a,"basin");
addBox(layerGroups.fixtures,-1.45,.98,1.25,1.48,.16,.9,0xe7f0f5,"basin");
addCylinder(layerGroups.fixtures,-1.45,1.09,1.25,.17,.17,.08,0x9db4c4,"basin");
addCylinder(layerGroups.fixtures,-1.45,1.23,1.0,.035,.035,.28,0xb7c9d6,"basin");
// Toilet: tank and bowl are deliberately simplified forms.
addBox(layerGroups.fixtures,1.35,.72,1.3,.62,.9,.35,0xe3edf4,"toilet");
addCylinder(layerGroups.fixtures,1.35,.36,1.3,.48,.42,.42,0xdce8f0,"toilet");
addBox(layerGroups.fixtures,1.35,1.18,1.52,.58,.72,.2,0xe3edf4,"toilet");
// Shower tray and screen
addBox(layerGroups.fixtures,1.45,.08,-1.15,1.45,.16,1.35,0x91aabd,"shower");
addBox(layerGroups.fixtures,.72,1.1,-1.78,.045,2.05,.045,0x6f9bb3,"shower");
addBox(layerGroups.fixtures,2.18,1.1,-1.78,.045,2.05,.045,0x6f9bb3,"shower");
addBox(layerGroups.fixtures,1.45,2.12,-1.78,1.5,.045,.045,0x6f9bb3,"shower");
// Bathroom details: mirror, faucet, shower head, towel rail and floor drain.
const mirrorMat=new THREE.MeshStandardMaterial({color:0x9bc8d8,metalness:.72,roughness:.12});
const mirror=new THREE.Mesh(new THREE.BoxGeometry(1.0,.82,.045),mirrorMat);mirror.position.set(-1.45,1.78,-2.245);layerGroups.fixtures.add(mirror);
addBox(layerGroups.fixtures,-1.45,1.34,-2.20,1.12,.055,.10,0x9aaeb9);
addCylinder(layerGroups.fixtures,-1.45,1.11,.84,.035,.035,.38,0xb9c9d2,"basin");
addPipe(layerGroups.fixtures,[-1.45,1.28,.84],[-1.45,1.28,1.02],.028,0xb9c9d2,"basin");
addBox(layerGroups.fixtures,-.35,1.05,1.75,.62,.07,.08,0x9aaeb9);
addBox(layerGroups.fixtures,-.35,1.27,1.75,.05,.42,.05,0x9aaeb9);
addPipe(layerGroups.fixtures,[1.95,2.42,-1.72],[1.95,2.22,-1.72],.045,0xb9c9d2,"shower");
const showerHead=new THREE.Mesh(new THREE.SphereGeometry(.16,20,12),material(0x9fb4c0,.55));showerHead.scale.set(1,.35,1);showerHead.position.set(1.95,2.18,-1.72);showerHead.userData={id:"shower"};layerGroups.fixtures.add(showerHead);selectable.push(showerHead);
const floorDrain=new THREE.Mesh(new THREE.CylinderGeometry(.13,.13,.025,32),material(0x8799a5,.65));floorDrain.position.set(1.9,.17,-.55);floorDrain.userData={id:"drainPipe"};layerGroups.fixtures.add(floorDrain);selectable.push(floorDrain);
// Hot/cold distribution lines and branches (schematic, not dimensions for construction).
addPipe(layerGroups.cold,[-2.25,.28,-1.95],[-2.25,2.35,-1.95],.075,0x269ff2,"coldPipe");
addPipe(layerGroups.cold,[-2.25,2.35,-1.95],[1.95,2.35,-1.95],.075,0x269ff2,"coldPipe");
addPipe(layerGroups.cold,[-1.45,2.35,-1.95],[-1.45,1.1,1.25],.065,0x269ff2,"coldPipe");
addPipe(layerGroups.cold,[1.55,2.35,-1.95],[1.55,1.15,-1.15],.065,0x269ff2,"coldPipe");
addPipe(layerGroups.cold,[1.35,2.35,-1.95],[1.35,1.45,1.3],.065,0x269ff2,"coldPipe");
addPipe(layerGroups.hot,[-1.95,.28,-1.72],[-1.95,2.08,-1.72],.065,0xff704d,"hotPipe");
addPipe(layerGroups.hot,[-1.95,2.08,-1.72],[1.8,2.08,-1.72],.065,0xff704d,"hotPipe");
addPipe(layerGroups.hot,[-1.45,2.08,-1.72],[-1.45,1.12,1.25],.06,0xff704d,"hotPipe");
addPipe(layerGroups.hot,[1.55,2.08,-1.72],[1.55,1.18,-1.15],.06,0xff704d,"hotPipe");
// Waste branches are purple and visibly separated from supply routes.
addPipe(layerGroups.drain,[-1.45,.38,1.25],[-1.45,.16,1.25],.075,0xa88cff,"drainPipe");
addPipe(layerGroups.drain,[-1.45,.16,1.25],[1.35,.16,1.25],.075,0xa88cff,"drainPipe");
addPipe(layerGroups.drain,[1.35,.16,1.25],[1.35,.16,-1.15],.075,0xa88cff,"drainPipe");
addPipe(layerGroups.drain,[1.35,.16,-1.15],[1.45,.16,-1.15],.075,0xa88cff,"drainPipe");
// Educational fitting display: schematic models, not assembly instructions.
addBox(layerGroups.fittings,0,.08,3.05,4.8,.16,1.05,0x344c60);
// Elbow: two connected segments.
addPipe(layerGroups.fittings,[-1.65,.28,2.75],[-1.1,.28,2.75],.105,0x53c6b4,"elbow");
addPipe(layerGroups.fittings,[-1.1,.28,2.75],[-1.1,.78,2.75],.105,0x53c6b4,"elbow");
// Tee: three branches meeting at one point.
addPipe(layerGroups.fittings,[-.35,.28,2.75],[.35,.28,2.75],.105,0x68a9e8,"tee");
addPipe(layerGroups.fittings,[0,.28,2.75],[0,.72,2.75],.105,0x68a9e8,"tee");
// Reducer represented by a short tapered connector.
const reducer=new THREE.Mesh(new THREE.CylinderGeometry(.07,.14,.42,24),material(0xe0b66b,.35));reducer.rotation.z=Math.PI/2;reducer.position.set(1.05,.32,2.75);reducer.userData={id:"reducer"};layerGroups.fittings.add(reducer);selectable.push(reducer);
// Schematic trap shape for recognizing the drainage component.
addPipe(layerGroups.fittings,[1.65,.52,2.75],[1.95,.52,2.75],.095,0xa88cff,"trap");
addPipe(layerGroups.fittings,[1.95,.52,2.75],[1.95,.25,2.75],.095,0xa88cff,"trap");
addPipe(layerGroups.fittings,[1.95,.25,2.75],[2.25,.25,2.75],.095,0xa88cff,"trap");
// Educational valve symbol on the cold-water line.
const valve=new THREE.Mesh(new THREE.TorusGeometry(.16,.05,12,28),material(0x52d6a0,.5));valve.position.set(-2.25,1.35,-1.95);valve.userData={id:"valve"};layerGroups.cold.add(valve);selectable.push(valve);
const parts = [
 {id:"coldPipe",name:{ar:"أنبوب الماء البارد",fr:"Conduite d’eau froide",en:"Cold-water pipe"},desc:{ar:"مسار تعليمي يوضح توزيع الماء البارد نحو التجهيزات الصحية.",fr:"Circuit pédagogique de distribution d’eau froide vers les équipements.",en:"A teaching route showing cold-water distribution to bathroom fixtures."},system:{ar:"التغذية",fr:"Alimentation",en:"Supply"},purpose:{ar:"تغذية التجهيزات بالماء البارد",fr:"Alimenter les équipements en eau froide",en:"Supply fixtures with cold water"}},
 {id:"hotPipe",name:{ar:"أنبوب الماء الساخن",fr:"Conduite d’eau chaude",en:"Hot-water pipe"},desc:{ar:"يمثل مسار توزيع الماء الساخن في الرسم، دون تحديد أقطار أو طريقة تنفيذ.",fr:"Représente la distribution d’eau chaude, sans dimensions ni méthode d’installation.",en:"Represents hot-water distribution without specifying construction dimensions or methods."},system:{ar:"التغذية",fr:"Alimentation",en:"Supply"},purpose:{ar:"توزيع الماء الساخن",fr:"Distribuer l’eau chaude",en:"Distribute hot water"}},
 {id:"drainPipe",name:{ar:"أنبوب الصرف",fr:"Conduite d’évacuation",en:"Drain pipe"},desc:{ar:"مسار رمزي للمياه المستعملة من التجهيزات باتجاه شبكة الصرف.",fr:"Parcours symbolique des eaux usées vers le réseau d’évacuation.",en:"A schematic route for wastewater from fixtures to the drainage network."},system:{ar:"الصرف الصحي",fr:"Évacuation",en:"Drainage"},purpose:{ar:"نقل المياه المستعملة",fr:"Évacuer les eaux usées",en:"Carry wastewater away"}},
 {id:"valve",name:{ar:"صمام تحكم (رمزي)",fr:"Vanne (symbole)",en:"Control valve (symbol)"},desc:{ar:"رمز تعليمي يشرح وجود عنصر تحكم ضمن الشبكة. لا يوضح طريقة تركيبه أو تشغيله.",fr:"Symbole pédagogique d’un organe de commande, sans procédure de montage ou d’utilisation.",en:"A teaching symbol for a control component; no installation or operation procedure is shown."},system:{ar:"التحكم",fr:"Commande",en:"Control"},purpose:{ar:"تمثيل التحكم في التدفق",fr:"Représenter la commande du débit",en:"Represent flow control"}},
 {id:"basin",name:{ar:"حوض الغسل",fr:"Lavabo",en:"Washbasin"},desc:{ar:"تجهيز صحي يستقبل الماء ويصرف المياه المستعملة عبر منظومة صرف مناسبة.",fr:"Équipement sanitaire qui reçoit l’eau et évacue les eaux usées par un système adapté.",en:"A sanitary fixture that receives water and sends wastewater to a suitable drainage system."},system:{ar:"تجهيز صحي",fr:"Équipement sanitaire",en:"Sanitary fixture"},purpose:{ar:"الغسل والنظافة",fr:"Lavage et hygiène",en:"Washing and hygiene"}},
 {id:"toilet",name:{ar:"مرحاض",fr:"Toilette",en:"Toilet"},desc:{ar:"تجهيز صحي مرتبط بالتغذية بالماء والصرف. النموذج مبسط للتعرف على المكونات فقط.",fr:"Équipement relié à l’alimentation en eau et à l’évacuation. Modèle simplifié.",en:"A fixture connected to water supply and drainage. The model is simplified for recognition."},system:{ar:"تجهيز صحي",fr:"Équipement sanitaire",en:"Sanitary fixture"},purpose:{ar:"الاستعمال الصحي",fr:"Usage sanitaire",en:"Sanitary use"}},
 {id:"shower",name:{ar:"منطقة الدش",fr:"Espace douche",en:"Shower area"},desc:{ar:"منطقة استحمام رمزية مرتبطة بمساري التغذية والصرف في المخطط.",fr:"Zone de douche symbolique reliée aux circuits d’alimentation et d’évacuation.",en:"A schematic shower area connected to supply and drainage routes."},system:{ar:"تجهيز صحي",fr:"Équipement sanitaire",en:"Sanitary fixture"},purpose:{ar:"الاستحمام وتصريف المياه",fr:"Douche et évacuation",en:"Showering and drainage"}},
 {id:"elbow",name:{ar:"كوع 90°",fr:"Coude 90°",en:"90° elbow"},desc:{ar:"وصلة تغيّر اتجاه المسار في الرسم. زاوية النموذج توضيحية وليست مواصفة تنفيذ.",fr:"Raccord qui change la direction du tracé. Modèle illustratif, sans prescription de pose.",en:"A fitting that changes a route direction. Illustrative model, not an installation specification."},system:{ar:"وصلات",fr:"Raccords",en:"Fittings"},purpose:{ar:"تغيير اتجاه المسار",fr:"Changer la direction",en:"Change route direction"}},
 {id:"tee",name:{ar:"وصلة T",fr:"Té",en:"Tee fitting"},desc:{ar:"تمثيل لوصلة ذات ثلاثة منافذ تُستخدم رمزياً لفهم تفرع الشبكة.",fr:"Représentation d’un raccord à trois ouvertures pour comprendre une dérivation.",en:"A three-opening fitting shown to explain a network branch."},system:{ar:"وصلات",fr:"Raccords",en:"Fittings"},purpose:{ar:"تمثيل التفرع",fr:"Représenter une dérivation",en:"Represent a branch"}},
 {id:"reducer",name:{ar:"مخفض",fr:"Réduction",en:"Reducer"},desc:{ar:"وصلة انتقال بين مقطعين مختلفين في الحجم. لا تستنتج منها أبعاداً حقيقية.",fr:"Raccord de transition entre deux sections de tailles différentes.",en:"A transition fitting between two differently sized sections."},system:{ar:"وصلات",fr:"Raccords",en:"Fittings"},purpose:{ar:"الانتقال بين مقطعين",fr:"Relier deux sections",en:"Connect two sections"}},
 {id:"trap",name:{ar:"سيفون / مصيدة روائح",fr:"Siphon",en:"Trap"},desc:{ar:"عنصر في الصرف يساعد على الحد من رجوع روائح شبكة الصرف إلى المكان.",fr:"Élément d’évacuation qui aide à limiter le retour des odeurs.",en:"A drainage component that helps limit sewer odors returning indoors."},system:{ar:"الصرف الصحي",fr:"Évacuation",en:"Drainage"},purpose:{ar:"الحد من رجوع الروائح",fr:"Limiter les odeurs",en:"Limit odor return"}}
];
function showPart(id){const p=parts.find(x=>x.id===id);if(!p)return;$("#partName").textContent=p.name[lang];$("#partDescription").textContent=p.desc[lang];$("#partSystem").textContent=p.system[lang];$("#partPurpose").textContent=p.purpose[lang];$("#sceneStatus").textContent=p.name[lang]+" — "+p.desc[lang];}

// Guided and free exploration modes.
const guidedSteps=[1,2,3,4];let guidedIndex=0;let learningMode="guided";
function updateGuidedPanel(){
 const panel=$("#guidedPanel");if(!panel)return;
 panel.hidden=learningMode==="free";
 $("#guidedMode").classList.toggle("active",learningMode==="guided");
 $("#freeMode").classList.toggle("active",learningMode==="free");
 if(learningMode==="free"){$("#sceneStatus").textContent=translations[lang].freeHint;return;}
 const n=guidedSteps[guidedIndex];
 $("#guidedStepTitle").textContent=translations[lang][`step${n}Title`];
 $("#guidedStepText").textContent=translations[lang][`step${n}Text`];
 $("#guidedCounter").textContent=(guidedIndex+1)+" / "+guidedSteps.length;
 $("#nextGuidedStep").textContent=guidedIndex===guidedSteps.length-1?(lang==="ar"?"إعادة الجولة":lang==="fr"?"Recommencer":"Restart tour"):translations[lang].nextStep;
}
$("#guidedMode").addEventListener("click",()=>{learningMode="guided";updateGuidedPanel();});
$("#freeMode").addEventListener("click",()=>{learningMode="free";updateGuidedPanel();});
$("#nextGuidedStep").addEventListener("click",()=>{guidedIndex=(guidedIndex+1)%guidedSteps.length;updateGuidedPanel();});
function moveCamera(position,target=new THREE.Vector3(0,1.1,0),top=false){camera.up.set(0,0,top?-1:1);camera.position.copy(position);controls.target.copy(target);controls.update();}
$("#frontView").addEventListener("click",()=>moveCamera(new THREE.Vector3(0,3.0,9.5)));
$("#topView").addEventListener("click",()=>moveCamera(new THREE.Vector3(0,10,.1),new THREE.Vector3(0,0,0),true));
let selectionBox=null;
function highlightObject(object){if(selectionBox){scene.remove(selectionBox);selectionBox.geometry.dispose();selectionBox.material.dispose();selectionBox=null;}selectionBox=new THREE.BoxHelper(object,0xffd166);scene.add(selectionBox);}

renderer.domElement.addEventListener("pointerup",e=>{const rect=renderer.domElement.getBoundingClientRect();mouse.x=((e.clientX-rect.left)/rect.width)*2-1;mouse.y=-((e.clientY-rect.top)/rect.height)*2+1;raycaster.setFromCamera(mouse,camera);const hit=raycaster.intersectObjects(selectable)[0];if(hit&&hit.object.userData.id){showPart(hit.object.userData.id);highlightObject(hit.object);}});
document.querySelectorAll(".layer-btn").forEach(btn=>btn.addEventListener("click",()=>{const group=layerGroups[btn.dataset.layer];group.visible=!group.visible;btn.classList.toggle("active",group.visible);}));
$("#resetView").addEventListener("click",()=>{moveCamera(new THREE.Vector3(7,5.6,8),new THREE.Vector3(0,1.15,0));});
function animate(){requestAnimationFrame(animate);controls.update();if(selectionBox)selectionBox.update();renderer.render(scene,camera);}animate();
function resize(){const w=Math.max(container.clientWidth,1),h=Math.max(container.clientHeight,1);camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);}
window.addEventListener("resize",resize);window.__resizeScene=resize;
renderText();


// Learning progress is stored locally on this device only.
const STORAGE_KEY="plumblab-progress-v4";
let completedLessons=JSON.parse(localStorage.getItem(STORAGE_KEY)||localStorage.getItem("plumblab-progress-v3")||"[]");
function updateProgress(){
 const percent=Math.round(completedLessons.length/lessons.length*100);
 const bar=$("#progressBar"),label=$("#progressText");
 if(bar)bar.style.width=percent+"%";
 if(label)label.textContent=(lang==="ar"?"التقدم: ":lang==="fr"?"Progression : ":"Progress: ")+percent+"%";
}
function toggleLesson(index){
 if(completedLessons.includes(index))completedLessons=completedLessons.filter(x=>x!==index);else completedLessons.push(index);
 localStorage.setItem(STORAGE_KEY,JSON.stringify(completedLessons));renderLessons();updateProgress();
}
const originalRenderLessons=renderLessons;
renderLessons=function(){
 $("#lessonList").innerHTML=lessons.map((l,i)=>`<article class="lesson-card"><span class="lesson-num">${String(i+1).padStart(2,"0")}</span><div class="lesson-copy"><h3>${l.title[lang]}</h3><p>${l.body[lang]}</p><button class="lesson-toggle ${completedLessons.includes(i)?"done":""}" data-lesson="${i}">${completedLessons.includes(i)?translations[lang].lessonDone:translations[lang].markDone}</button></div></article>`).join("");
 document.querySelectorAll(".lesson-toggle").forEach(b=>b.addEventListener("click",()=>toggleLesson(Number(b.dataset.lesson))));
 updateProgress();
};
const searchInput=$("#catalogSearch");
function renderCatalogFiltered(){
 const q=(searchInput?.value||"").trim().toLocaleLowerCase();
 const items=catalog.filter(c=>(c[1]+" "+c[2][lang]).toLocaleLowerCase().includes(q));
 $("#catalog").innerHTML=items.map(c=>`<article class="catalog-card"><div class="symbol">${c[0]}</div><h3>${c[1]}</h3><p>${c[2][lang]}</p></article>`).join("");
 $("#catalogCount").textContent=items.length+" "+translations[lang].partsFound;
 if(!items.length)$("#catalog").innerHTML=`<p class="muted">${translations[lang].noParts}</p>`;
}
if(searchInput)searchInput.addEventListener("input",renderCatalogFiltered);
const questions=[
 {q:{ar:"أي مسار ينقل المياه المستعملة؟",fr:"Quel réseau transporte les eaux usées ?",en:"Which route carries wastewater?"},a:[{ar:"شبكة الصرف",fr:"Évacuation",en:"Drainage"},{ar:"الماء الساخن",fr:"Eau chaude",en:"Hot water"},{ar:"الماء البارد",fr:"Eau froide",en:"Cold water"}],correct:0},
 {q:{ar:"ما وظيفة الكوع؟",fr:"À quoi sert un coude ?",en:"What is an elbow used for?"},a:[{ar:"تغيير اتجاه المسار",fr:"Changer la direction",en:"Change route direction"},{ar:"تخزين الماء",fr:"Stocker l’eau",en:"Store water"},{ar:"تنقية الهواء",fr:"Filtrer l’air",en:"Filter air"}],correct:0},
 {q:{ar:"ما وظيفة السيفون غالباً؟",fr:"Quel est le rôle du siphon ?",en:"What is a trap commonly for?"},a:[{ar:"الحد من رجوع الروائح",fr:"Limiter les odeurs",en:"Limit odor return"},{ar:"رفع ضغط الماء",fr:"Augmenter la pression",en:"Increase pressure"},{ar:"تسخين الماء",fr:"Chauffer l’eau",en:"Heat water"}],correct:0},
 {q:{ar:"ما الذي يميز وصلة T في المخطط؟",fr:"Que représente un raccord en T ?",en:"What does a tee fitting represent?"},a:[{ar:"تفرع بثلاثة منافذ",fr:"Une dérivation à trois ouvertures",en:"A three-way branch"},{ar:"نهاية مغلقة فقط",fr:"Une extrémité fermée",en:"A closed end only"},{ar:"مضخة",fr:"Une pompe",en:"A pump"}],correct:0},
 {q:{ar:"من ينفذ أعمال الغاز الحقيقية؟",fr:"Qui réalise les travaux réels de gaz ?",en:"Who should perform real gas work?"},a:[{ar:"مهني مؤهل وفق القواعد المحلية",fr:"Un professionnel qualifié selon les règles locales",en:"A qualified professional under local rules"},{ar:"أي متعلم بمفرده",fr:"Tout apprenant seul",en:"Any learner alone"},{ar:"محاكاة الموقع فقط",fr:"Le simulateur uniquement",en:"The simulator only"}],correct:0}
];
let questionIndex=0,quizScore=0,answered=false;
function renderQuestion(){
 const item=questions[questionIndex];$("#questionText").textContent=item.q[lang];$("#quizCounter").textContent=(questionIndex+1)+" / "+questions.length;$("#quizScore").textContent=translations[lang].scoreLabel+": "+quizScore;$("#quizFeedback").textContent="";$("#nextQuestion").disabled=true;answered=false;
 $("#answerList").innerHTML=item.a.map((a,i)=>`<button class="answer-option" data-answer="${i}">${a[lang]}</button>`).join("");
 document.querySelectorAll(".answer-option").forEach(b=>b.addEventListener("click",()=>{if(answered)return;answered=true;const chosen=Number(b.dataset.answer);document.querySelectorAll(".answer-option").forEach(x=>{x.disabled=true;if(Number(x.dataset.answer)===item.correct)x.classList.add("correct");});if(chosen===item.correct){quizScore++;$("#quizFeedback").textContent=translations[lang].correct;}else{$("#quizFeedback").textContent=translations[lang].wrong;b.classList.add("incorrect");}$("#quizScore").textContent=translations[lang].scoreLabel+": "+quizScore;$("#nextQuestion").disabled=false;}));
}
$("#nextQuestion").addEventListener("click",()=>{if(questionIndex<questions.length-1){questionIndex++;renderQuestion();}else{$("#questionText").textContent=translations[lang].finish+" — "+quizScore+"/"+questions.length;$("#answerList").innerHTML="";$("#quizFeedback").textContent=translations[lang].scoreLabel+": "+Math.round(quizScore/questions.length*100)+"%";$("#nextQuestion").disabled=true;}});
$("#restartQuiz").addEventListener("click",()=>{questionIndex=0;quizScore=0;renderQuestion();});
const previousRenderText=renderText;
renderText=function(){previousRenderText();renderCatalogFiltered();renderLessons();renderQuestion();updateProgress();};
renderQuestion();updateProgress();updateGuidedPanel();
