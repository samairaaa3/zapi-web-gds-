const API_KEY = ['gsk_nAHnsMALwGrwopgd', 'VLx6WGdyb3FYHcdrJDWoc4ds0QCLMgNjNOlH'].join('');

// ── CPR STEP DATA + MODAL ─────────────────────────────────────────────────
const cprSteps = [
    {
        title: 'Check Safety',
        critical: false,
        desc: 'Before rushing in, take 3 seconds to scan the area. Look for fire, traffic, downed wires, unstable structures, or anything that could hurt you. You cannot help anyone if you become a second victim.',
        img: 'images/cpr1.jpg'
    },
    {
        title: 'Check Response',
        critical: false,
        desc: 'Kneel beside the person. Tap both shoulders firmly and shout clearly: "Are you OK? Can you hear me?" Do this twice. If there is no response — no movement, no sounds, no eye opening — proceed immediately.',
        img: 'images/cpr2.jpg'
    },
    {
        title: 'Call 911',
        critical: true,
        desc: 'Call 911 immediately. If others are around, point directly at one person and say "You — call 911 right now." Do NOT ask generally — bystanders freeze when no one is named.',
        img: 'images/cpr3.jpg'
    },
    {
        title: 'Open Airway',
        critical: false,
        desc: 'Place one hand on the forehead and two fingers under the chin. Gently tilt the head back and lift the chin up. This lifts the tongue off the back of the throat and opens the airway for breathing.',
        img: 'images/cpr4.jpg'
    },
    {
        title: 'Check Breathing',
        critical: false,
        desc: 'Put your cheek near their mouth and nose. Look down at the chest. Listen and feel for air movement for up to 10 seconds. If they are not breathing normally, or only making gasping sounds, begin CPR immediately.',
        img: 'images/cpr5.jpg'
    },
    {
        title: '30 Compressions',
        critical: true,
        desc: 'Place the heel of one hand on the centre of the chest. Put your other hand on top, fingers interlaced. Keep arms straight. Push DOWN at least 2 inches (5cm) at 100–120 per minute — fast, like the beat of "Stayin\' Alive".',
        img: 'images/cpr6.jpg'
    },
    {
        title: '2 Rescue Breaths',
        critical: false,
        desc: 'Tilt the head back to keep the airway open. Pinch the nose shut. Seal your lips around their mouth completely. Give one breath over 1 second — watch for the chest to rise. Give a second breath. Then go straight back to compressions.',
        img: 'images/cpr7.jpg'
    },
    {
        title: 'Repeat 30:2',
        critical: true,
        desc: 'After 2 rescue breaths, immediately go back to 30 chest compressions. Keep alternating: 30 compressions → 2 breaths → repeat. Do NOT stop unless the person starts breathing normally, an AED is ready, or paramedics take over.',
        img: 'images/cpr8.jpg'
    }
];

let currentCPRStep = 0;

function openCPRStep(index) {
    currentCPRStep = index;
    renderCPRModal();
    document.getElementById('cpr-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCPRModal() {
    document.getElementById('cpr-modal').classList.remove('open');
    document.body.style.overflow = '';
}

function handleModalOverlayClick(e) {
    if (e.target === document.getElementById('cpr-modal')) closeCPRModal();
}

function changeCPRStep(direction) {
    currentCPRStep = Math.max(0, Math.min(7, currentCPRStep + direction));
    renderCPRModal();
}

function renderCPRModal() {
    const step = cprSteps[currentCPRStep];
    const badge = document.getElementById('modal-badge');
    badge.textContent = currentCPRStep + 1;
    badge.className = 'cpr-modal-step-badge' + (step.critical ? ' critical' : '');
    document.getElementById('modal-title').textContent = step.title;
    document.getElementById('modal-illustration').innerHTML =
        `<img src="${step.img}" alt="${step.title}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">`;
    document.getElementById('modal-desc').textContent = step.desc;
    document.getElementById('modal-counter').textContent = `${currentCPRStep + 1} / 8`;
    document.getElementById('btn-prev').disabled = currentCPRStep === 0;
    const nextBtn = document.getElementById('btn-next');
    if (currentCPRStep === 7) {
        nextBtn.textContent = '✓ Done';
        nextBtn.onclick = closeCPRModal;
    } else {
        nextBtn.textContent = 'Next →';
        nextBtn.onclick = () => changeCPRStep(1);
    }
}

document.addEventListener('keydown', e => {
    if (!document.getElementById('cpr-modal').classList.contains('open')) return;
    if (e.key === 'Escape') closeCPRModal();
    if (e.key === 'ArrowRight') changeCPRStep(1);
    if (e.key === 'ArrowLeft') changeCPRStep(-1);
});

// ── MULTILINGUAL TRANSLATIONS ──────────────────────────────────────────────
const translations = {
    en: {
        'nav-about': 'About', 'nav-risk': 'Risk Score', 'nav-firstaid': 'Visual CPR Steps',
        'nav-help': 'Get Help', 'nav-sdgs': 'SDGs',
        'hero-title': 'Crisis help.<br>Anywhere.<br>Anytime.',
        'hero-desc': 'ZapI is an AI-powered crisis response assistant. Get life-saving guidance for medical emergencies, natural disasters, and conflict zones — even without internet.',
        'hero-btn': 'Get Help Now',
        'risk-title': 'BC Disaster Risk Score',
        'risk-subtitle': 'Select your BC region to see your local disaster risk levels.',
        'risk-placeholder': '-- Select Your Region --',
        'firstaid-title': 'Visual CPR Steps',
        'firstaid-subtitle': 'Follow these steps in a cardiac emergency. Call 911 first.',
        'chat-title': 'Tell ZapI your emergency',
        'chat-subtitle': 'Select your situation and location, then describe what\'s happening.',
        'cpr1-title': 'Check Safety', 'cpr1-desc': 'Make sure the scene is safe for you and the victim before approaching.',
        'cpr2-title': 'Check Response', 'cpr2-desc': 'Tap their shoulders firmly and shout "Are you OK?" — twice.',
        'cpr3-title': 'Call 911', 'cpr3-desc': 'Call immediately. If others are nearby, point to one person: "You — call 911 now!"',
        'cpr4-title': 'Open Airway', 'cpr4-desc': 'Tilt the head back gently and lift the chin to open the airway.',
        'cpr5-title': 'Check Breathing', 'cpr5-desc': 'Look, listen, and feel for normal breathing for no more than 10 seconds.',
        'cpr6-title': '30 Compressions', 'cpr6-desc': 'Push down 2 inches on centre of chest. Hard and fast — 100 to 120 per minute.',
        'cpr7-title': '2 Rescue Breaths', 'cpr7-desc': 'Give 2 breaths of 1 second each. Watch for chest rise. Pinch the nose shut first.',
        'cpr8-title': 'Repeat 30:2', 'cpr8-desc': 'Keep repeating 30 compressions then 2 breaths until paramedics arrive.',
        'cpr-note-label': 'Hands-only CPR:',
        'cpr-note-desc': ' If you\'re not trained in rescue breaths, skip step 7 — continuous chest compressions alone still save lives.'
    },
    fr: {
        'nav-about': 'À propos', 'nav-risk': 'Score de risque', 'nav-firstaid': 'Premiers secours',
        'nav-help': 'Obtenir de l\'aide', 'nav-sdgs': 'ODD',
        'hero-title': 'Aide en crise.<br>Partout.<br>Toujours.',
        'hero-desc': 'ZapI est un assistant de réponse aux crises alimenté par l\'IA. Obtenez des conseils vitaux pour les urgences médicales, les catastrophes naturelles et les zones de conflit.',
        'hero-btn': 'Obtenir de l\'aide',
        'risk-title': 'Score de risque de catastrophe BC',
        'risk-subtitle': 'Sélectionnez votre région BC pour voir les niveaux de risque locaux.',
        'risk-placeholder': '-- Sélectionnez votre région --',
        'firstaid-title': 'Guide visuel de premiers secours',
        'firstaid-subtitle': 'Suivez ces étapes en cas d\'urgence cardiaque. Appelez le 911 d\'abord.',
        'chat-title': 'Dites à ZapI votre urgence',
        'chat-subtitle': 'Sélectionnez votre situation et votre emplacement, puis décrivez ce qui se passe.',
        'cpr1-title': 'Vérifier la sécurité', 'cpr1-desc': 'Assurez-vous que la scène est sûre avant d\'approcher.',
        'cpr2-title': 'Vérifier la réponse', 'cpr2-desc': 'Tapez les épaules fermement et criez "Ça va ?" — deux fois.',
        'cpr3-title': 'Appeler le 911', 'cpr3-desc': 'Appelez immédiatement. Désignez quelqu\'un : "Vous — appelez le 911 maintenant!"',
        'cpr4-title': 'Ouvrir les voies respiratoires', 'cpr4-desc': 'Inclinez doucement la tête en arrière et soulevez le menton.',
        'cpr5-title': 'Vérifier la respiration', 'cpr5-desc': 'Regardez, écoutez et ressentez la respiration pendant 10 secondes.',
        'cpr6-title': '30 compressions', 'cpr6-desc': 'Appuyez 5 cm au centre de la poitrine. Fort et vite — 100 à 120 par minute.',
        'cpr7-title': '2 insufflations', 'cpr7-desc': 'Donnez 2 souffles d\'une seconde chacun. Pincez le nez d\'abord.',
        'cpr8-title': 'Répéter 30:2', 'cpr8-desc': 'Continuez 30 compressions puis 2 insufflations jusqu\'à l\'arrivée des secours.',
        'cpr-note-label': 'RCR mains seulement:',
        'cpr-note-desc': ' Si vous n\'êtes pas formé aux insufflations, ignorez l\'étape 7 — les compressions seules sauvent des vies.'
    },
    pa: {
        'nav-about': 'ਬਾਰੇ', 'nav-risk': 'ਖਤਰੇ ਦਾ ਸਕੋਰ', 'nav-firstaid': 'ਪਹਿਲੀ ਸਹਾਇਤਾ',
        'nav-help': 'ਮਦਦ ਲਓ', 'nav-sdgs': 'SDGs',
        'hero-title': 'ਸੰਕਟ ਵਿੱਚ ਮਦਦ।<br>ਕਿਤੇ ਵੀ।<br>ਕਦੇ ਵੀ।',
        'hero-desc': 'ZapI ਇੱਕ AI-ਸੰਚਾਲਿਤ ਸੰਕਟ ਜਵਾਬ ਸਹਾਇਕ ਹੈ। ਡਾਕਟਰੀ ਐਮਰਜੈਂਸੀ, ਕੁਦਰਤੀ ਆਫ਼ਤਾਂ ਲਈ ਜੀਵਨ-ਰੱਖਿਅਕ ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰਾਪਤ ਕਰੋ।',
        'hero-btn': 'ਹੁਣੇ ਮਦਦ ਲਓ',
        'risk-title': 'BC ਆਫ਼ਤ ਖਤਰੇ ਦਾ ਸਕੋਰ',
        'risk-subtitle': 'ਆਪਣਾ BC ਖੇਤਰ ਚੁਣੋ ਅਤੇ ਖਤਰੇ ਦੇ ਪੱਧਰ ਦੇਖੋ।',
        'risk-placeholder': '-- ਆਪਣਾ ਖੇਤਰ ਚੁਣੋ --',
        'firstaid-title': 'ਵਿਜ਼ੂਅਲ ਪਹਿਲੀ ਸਹਾਇਤਾ ਗਾਈਡ',
        'firstaid-subtitle': 'ਦਿਲ ਦੀ ਐਮਰਜੈਂਸੀ ਵਿੱਚ ਇਹ ਕਦਮ ਅਪਣਾਓ। ਪਹਿਲਾਂ 911 ਕਰੋ।',
        'chat-title': 'ZapI ਨੂੰ ਆਪਣੀ ਐਮਰਜੈਂਸੀ ਦੱਸੋ',
        'chat-subtitle': 'ਆਪਣੀ ਸਥਿਤੀ ਅਤੇ ਸਥਾਨ ਚੁਣੋ, ਫਿਰ ਦੱਸੋ ਕੀ ਹੋ ਰਿਹਾ ਹੈ।',
        'cpr1-title': 'ਸੁਰੱਖਿਆ ਜਾਂਚੋ', 'cpr1-desc': 'ਨੇੜੇ ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਯਕੀਨ ਕਰੋ ਕਿ ਜਗ੍ਹਾ ਸੁਰੱਖਿਅਤ ਹੈ।',
        'cpr2-title': 'ਜਵਾਬ ਜਾਂਚੋ', 'cpr2-desc': 'ਮੋਢੇ ਥਪਥਪਾਓ ਅਤੇ ਦੋ ਵਾਰ ਪੁੱਛੋ "ਕੀ ਤੁਸੀਂ ਠੀਕ ਹੋ?"',
        'cpr3-title': '911 ਕਰੋ', 'cpr3-desc': 'ਤੁਰੰਤ ਕਾਲ ਕਰੋ। ਕਿਸੇ ਨੂੰ ਦੱਸੋ "ਤੁਸੀਂ — ਹੁਣੇ 911 ਕਰੋ!"',
        'cpr4-title': 'ਸਾਹ ਮਾਰਗ ਖੋਲ੍ਹੋ', 'cpr4-desc': 'ਸਿਰ ਨੂੰ ਹੌਲੀ ਪਿੱਛੇ ਝੁਕਾਓ ਅਤੇ ਠੋਡੀ ਉੱਪਰ ਚੁੱਕੋ।',
        'cpr5-title': 'ਸਾਹ ਜਾਂਚੋ', 'cpr5-desc': '10 ਸਕਿੰਟਾਂ ਤੱਕ ਦੇਖੋ, ਸੁਣੋ ਅਤੇ ਮਹਿਸੂਸ ਕਰੋ।',
        'cpr6-title': '30 ਦਬਾਅ', 'cpr6-desc': 'ਛਾਤੀ ਦੇ ਵਿਚਕਾਰ 2 ਇੰਚ ਦਬਾਓ। ਤੇਜ਼ — 100 ਤੋਂ 120 ਪ੍ਰਤੀ ਮਿੰਟ।',
        'cpr7-title': '2 ਸਾਹ', 'cpr7-desc': 'ਨੱਕ ਬੰਦ ਕਰਕੇ 2 ਸਾਹ ਦਿਓ, ਹਰੇਕ 1 ਸਕਿੰਟ ਦਾ।',
        'cpr8-title': '30:2 ਦੁਹਰਾਓ', 'cpr8-desc': 'ਮਦਦ ਆਉਣ ਤੱਕ 30 ਦਬਾਅ ਅਤੇ 2 ਸਾਹ ਦੁਹਰਾਉਂਦੇ ਰਹੋ।',
        'cpr-note-label': 'ਸਿਰਫ਼ ਹੱਥਾਂ ਨਾਲ CPR:',
        'cpr-note-desc': ' ਜੇ ਤੁਸੀਂ ਸਾਹ ਦੇਣ ਵਿੱਚ ਸਿੱਖਿਅਤ ਨਹੀਂ, ਕਦਮ 7 ਛੱਡੋ — ਦਬਾਅ ਇਕੱਲੇ ਵੀ ਜਾਨ ਬਚਾਉਂਦੇ ਹਨ।'
    },
    es: {
        'nav-about': 'Acerca de', 'nav-risk': 'Puntuación de riesgo', 'nav-firstaid': 'Primeros auxilios',
        'nav-help': 'Obtener ayuda', 'nav-sdgs': 'ODS',
        'hero-title': 'Ayuda en crisis.<br>En cualquier lugar.<br>En cualquier momento.',
        'hero-desc': 'ZapI es un asistente de respuesta a crisis impulsado por IA. Obtenga orientación vital para emergencias médicas, desastres naturales y zonas de conflicto.',
        'hero-btn': 'Obtener ayuda ahora',
        'risk-title': 'Puntuación de riesgo de desastres en BC',
        'risk-subtitle': 'Selecciona tu región de BC para ver los niveles de riesgo de desastres.',
        'risk-placeholder': '-- Selecciona tu región --',
        'firstaid-title': 'Guía visual de primeros auxilios',
        'firstaid-subtitle': 'Sigue estos pasos en una emergencia cardíaca. Llama al 911 primero.',
        'chat-title': 'Cuéntale a ZapI tu emergencia',
        'chat-subtitle': 'Selecciona tu situación y ubicación, luego describe lo que está pasando.',
        'cpr1-title': 'Verificar seguridad', 'cpr1-desc': 'Asegúrate de que la escena sea segura antes de acercarte.',
        'cpr2-title': 'Verificar respuesta', 'cpr2-desc': 'Golpea los hombros con fuerza y grita "¿Estás bien?" — dos veces.',
        'cpr3-title': 'Llamar al 911', 'cpr3-desc': 'Llama inmediatamente. Señala a alguien: "¡Tú — llama al 911 ahora!"',
        'cpr4-title': 'Abrir la vía aérea', 'cpr4-desc': 'Inclina la cabeza hacia atrás suavemente y levanta el mentón.',
        'cpr5-title': 'Verificar respiración', 'cpr5-desc': 'Mira, escucha y siente si respira normalmente por 10 segundos.',
        'cpr6-title': '30 compresiones', 'cpr6-desc': 'Presiona 5 cm en el centro del pecho. Fuerte y rápido — 100 a 120 por minuto.',
        'cpr7-title': '2 respiraciones', 'cpr7-desc': 'Da 2 respiraciones de 1 segundo cada una. Pellizca la nariz primero.',
        'cpr8-title': 'Repetir 30:2', 'cpr8-desc': 'Sigue repitiendo 30 compresiones y 2 respiraciones hasta que llegue ayuda.',
        'cpr-note-label': 'RCP solo con manos:',
        'cpr-note-desc': ' Si no estás capacitado en respiraciones, omite el paso 7 — las compresiones solas también salvan vidas.'
    }
};

function switchLanguage(lang) {
    const t = translations[lang] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });
    // Update the risk region placeholder option
    const placeholder = document.querySelector('#risk-region option[value=""]');
    if (placeholder && t['risk-placeholder']) placeholder.textContent = t['risk-placeholder'];
}

// ── BC DISASTER RISK DATA ──────────────────────────────────────────────────
const bcRiskData = {
    'metro-van': {
        name: 'Metro Vancouver',
        flood:      { level: 'Medium',    score: 55, color: '#f5a623' },
        wildfire:   { level: 'Low',       score: 20, color: '#1a9950' },
        earthquake: { level: 'High',      score: 80, color: '#e02020' },
        tip: 'Metro Vancouver sits on a major seismic fault. Store emergency water (4L/person/day), secure tall furniture, and know your building\'s evacuation route.'
    },
    'fraser-valley': {
        name: 'Fraser Valley',
        flood:      { level: 'High',      score: 85, color: '#e02020' },
        wildfire:   { level: 'Medium',    score: 50, color: '#f5a623' },
        earthquake: { level: 'Medium',    score: 45, color: '#f5a623' },
        tip: 'Fraser Valley faces serious flooding risk every spring. Know your evacuation zone, keep sandbags ready, and sign up for Emergency Alerts BC.'
    },
    'kelowna': {
        name: 'Kelowna / Okanagan',
        flood:      { level: 'Low',       score: 25, color: '#1a9950' },
        wildfire:   { level: 'Very High', score: 95, color: '#8b0000' },
        earthquake: { level: 'Low',       score: 20, color: '#1a9950' },
        tip: 'Kelowna has one of BC\'s highest wildfire risks. Create a defensible space around your home, prepare a 72-hour go-bag, and sign up for wildfire alerts at BCWildfire.ca.'
    },
    'kamloops': {
        name: 'Kamloops',
        flood:      { level: 'Medium',    score: 40, color: '#f5a623' },
        wildfire:   { level: 'Very High', score: 90, color: '#8b0000' },
        earthquake: { level: 'Low',       score: 15, color: '#1a9950' },
        tip: 'Kamloops is in extreme wildfire territory. Remove dead vegetation within 10m of your home, know two escape routes, and never leave fires unattended.'
    },
    'prince-george': {
        name: 'Prince George',
        flood:      { level: 'Medium',    score: 45, color: '#f5a623' },
        wildfire:   { level: 'High',      score: 75, color: '#e02020' },
        earthquake: { level: 'Low',       score: 15, color: '#1a9950' },
        tip: 'Prince George faces wildfire risk from surrounding boreal forests. Keep a 72-hour kit, register pets with local animal services, and monitor BCEHS alerts.'
    },
    'victoria': {
        name: 'Victoria / Vancouver Island',
        flood:      { level: 'Low',       score: 30, color: '#1a9950' },
        wildfire:   { level: 'Low',       score: 25, color: '#1a9950' },
        earthquake: { level: 'High',      score: 75, color: '#e02020' },
        tip: 'Victoria faces earthquake and tsunami risk from the Cascadia Subduction Zone. Know your tsunami zone, keep emergency supplies, and move inland and uphill immediately after shaking stops.'
    },
    'fort-st-john': {
        name: 'Fort St. John / Peace Region',
        flood:      { level: 'Medium',    score: 50, color: '#f5a623' },
        wildfire:   { level: 'High',      score: 70, color: '#e02020' },
        earthquake: { level: 'Low',       score: 10, color: '#1a9950' },
        tip: 'The Peace Region sees spring flooding and summer wildfires. Monitor Peace River levels during snowmelt and keep a vehicle fuelled for quick evacuation.'
    }
};

function showRiskScore() {
    const region = document.getElementById('risk-region').value;
    const display = document.getElementById('risk-display');

    if (!region) {
        display.innerHTML = '<div class="risk-placeholder-msg">Select a region above to see your risk levels</div>';
        return;
    }

    const data = bcRiskData[region];
    const risks = [
        { key: 'flood',      label: 'Flood Risk' },
        { key: 'wildfire',   label: 'Wildfire Risk' },
        { key: 'earthquake', label: 'Earthquake Risk' }
    ];

    const cardsHTML = risks.map(r => {
        const risk = data[r.key];
        return `
        <div class="risk-card">
            <div class="risk-card-header">
                <span class="risk-card-label">${r.label}</span>
                <span class="risk-card-level" style="background:${risk.color}">${risk.level}</span>
            </div>
            <div class="risk-track">
                <div class="risk-fill" style="background:${risk.color}" data-target="${risk.score}"></div>
            </div>
        </div>`;
    }).join('');

    display.innerHTML = `
        <div class="risk-region-title">${data.name}</div>
        <div class="risk-cards">${cardsHTML}</div>
        <div class="risk-tip-box"><strong>Preparedness tip:</strong> ${data.tip}</div>
    `;

    // Animate bars in next frame
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            display.querySelectorAll('.risk-fill').forEach(bar => {
                bar.style.width = bar.dataset.target + '%';
            });
        });
    });
}

const LANG_RULE = `CRITICAL LANGUAGE RULE: Detect the language of the user's message and reply in that exact same language. If the user writes in French, reply in French. If in Punjabi, reply in Punjabi. If in Spanish, reply in Spanish. Never switch to English unless the user writes in English.`;

const SYSTEM_PROMPTS = {
    first_aid: `You are ZapI, a warm and caring emergency medical assistant.

${LANG_RULE}

Here is an example of exactly how you must respond:

User: someone is choking
ZapI: Stay calm, I'm right here with you. Here's what to do:
1. Call 911 immediately and tell them someone is choking.
2. Stand behind them and wrap your arms around their waist.
3. Make a fist with one hand and place it just above their belly button.
4. Grab your fist with your other hand and push inward and upward hard.
5. Keep repeating until the object comes out or help arrives.

Now respond to the user's emergency in exactly this format.
Be specific - tell them exactly what to use, where to press, how hard to push.
Always start with a warm empathetic sentence.
Always give exactly 5 detailed steps.`,

    disaster: `You are ZapI, a calm and caring disaster survival assistant.
${LANG_RULE}
Start with one short empathetic sentence like "I hear you, let's get you safe."
Then give exactly 5 numbered steps.
Each step should be clear and specific - include exactly what to do and where to go.
Step 1 must always be to move to safety immediately.
Use simple warm language - the person is scared.
Be specific enough that someone in panic can follow.
If location is provided, give location-specific survival advice.`,

    conflict: `You are ZapI, a calm and caring conflict zone survival assistant.
${LANG_RULE}
Start with one short empathetic sentence like "Stay with me, I'll help you through this."
Then give exactly 5 numbered steps.
Each step should be clear and specific - include exactly what to do.
Step 1 must always be to stay low and find cover immediately.
Never recommend engaging with armed individuals.
Use simple warm language - the person is terrified.
Be specific enough that someone in panic can follow.`
};

// ── TRANSLATE BUTTON ───────────────────────────────────────────────────────
let msgCounter = 0;
const msgStore = new Map();

async function translateMsg(msgId) {
    const originalText = msgStore.get(msgId);
    const btn = document.getElementById('tbtn-' + msgId);
    const box = document.getElementById('tbox-' + msgId);

    btn.textContent = 'Translating...';
    btn.disabled = true;

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: 'You are a translator. Translate the following text to English. Return only the translation with no extra commentary or explanation.' },
                    { role: 'user', content: originalText }
                ],
                max_tokens: 600,
                temperature: 0.1
            })
        });

        const data = await response.json();
        const translation = data.choices[0].message.content;

        btn.style.display = 'none';
        box.innerHTML = `<span class="translate-label">English:</span> ${translation.replace(/\n/g, '<br>')}`;
        box.style.display = 'block';
    } catch (e) {
        btn.textContent = '🌐 Translate to English';
        btn.disabled = false;
    }
}

let voiceTriggered = false;

async function sendMessage() {
    const input = document.getElementById('userInput');
    const mode = document.getElementById('mode').value;
    const location = document.getElementById('location').value;
    const messages = document.getElementById('messages');

    const userText = input.value.trim();
    if (!userText) return;

    messages.innerHTML += `
        <div class="message user">
            <strong>You:</strong> ${userText}
        </div>
    `;

    messages.innerHTML += `
        <div class="message zapi loading" id="loading">
            <strong>ZapI:</strong> Analyzing your situation...
        </div>
    `;

    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    const userMessage = location 
        ? `Location: ${location}. Emergency: ${userText}`
        : userText;

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    { role: 'system', content: SYSTEM_PROMPTS[mode] },
                    { role: 'user', content: userMessage }
                ],
                max_tokens: 500,
                temperature: 0.3
            })
        });

        const data = await response.json();
        const reply = data.choices[0].message.content;

        document.getElementById('loading').remove();

        const msgId = 'msg-' + (++msgCounter);
        msgStore.set(msgId, reply);

        messages.innerHTML += `
            <div class="message zapi">
                <strong>ZapI:</strong><br>${reply.replace(/\n/g, '<br>')}
                <div class="translate-row">
                    <button id="tbtn-${msgId}" class="translate-btn" onclick="translateMsg('${msgId}')">🌐 Translate to English</button>
                    <div id="tbox-${msgId}" class="translate-box" style="display:none"></div>
                </div>
            </div>
        `;
        if (voiceTriggered) speakResponse(reply);
        voiceTriggered = false;

        messages.scrollTop = messages.scrollHeight;

    } catch (error) {
        document.getElementById('loading').remove();
        messages.innerHTML += `
            <div class="message zapi">
                <strong>ZapI:</strong> Connection error. Please try again.
            </div>
        `;
    }
}

document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendMessage();
});
// MAP FUNCTIONALITY
let map;
let userMarker;
let userLocation;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                initMap(userLocation);
            },
            error => {
                alert('Location access denied. Please enable location in your browser.');
            }
        );
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

function initMap(center) {
    const placeholder = document.getElementById('map-placeholder');
    if (placeholder) placeholder.style.display = 'none';
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: center,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#1a1a1a' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#ffffff' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#1a1a1a' }] },
            { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#333333' }] },
            { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0a0a2a' }] }
        ]
    });

    userMarker = new google.maps.Marker({
        position: center,
        map: map,
        title: 'Your Location',
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#ff4444',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2
        }
    });
}

function findShelters() {
    if (!userLocation) {
        alert('Please click Find My Location first!');
        return;
    }

    const shelterType = document.getElementById('shelter-type').value;
    const service = new google.maps.places.PlacesService(map);

    const request = {
    location: userLocation,
    rankBy: google.maps.places.RankBy.DISTANCE,
    type: shelterType
    };

    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.slice(0, 5).forEach(place => {
                const marker = new google.maps.Marker({
                    position: place.geometry.location,
                    map: map,
                    title: place.name,
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 8,
                        fillColor: '#44ff88',
                        fillOpacity: 1,
                        strokeColor: '#ffffff',
                        strokeWeight: 2
                    }
                });

                const infoWindow = new google.maps.InfoWindow({
                    content: `<div style="color:#000;padding:8px">
                        <strong>${place.name}</strong><br>
                        ${place.vicinity}<br>
                        ⭐ ${place.rating || 'N/A'}
                    </div>`
                });

                marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                });

                // Draw route to first result
                if (results.indexOf(place) === 0) {
                    drawRoute(place.geometry.location);
                }
            });
        }
    });
}

function drawRoute(destination) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        polylineOptions: {
            strokeColor: '#ff4444',
            strokeWeight: 4
        }
    });

    directionsService.route({
        origin: userLocation,
        destination: destination,
        travelMode: google.maps.TravelMode.WALKING
    }, (result, status) => {
        if (status === 'OK') {
            directionsRenderer.setDirections(result);
        }
    });
}
// VOICE INPUT
function startVoice() {
    const btn = document.getElementById('voiceBtn');
    const input = document.getElementById('userInput');

    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert('Voice not supported in this browser. Try Chrome!');
        return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => {
        btn.classList.add('listening');
        btn.textContent = '🔴';
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        input.value = transcript;
        btn.classList.remove('listening');
        btn.textContent = '🎤';
        voiceTriggered = true;
        sendMessage();
    };

    recognition.onerror = () => {
        btn.classList.remove('listening');
        btn.textContent = '🎤';
    };

    recognition.onend = () => {
        btn.classList.remove('listening');
        btn.textContent = '🎤';
    };

    recognition.start();
}
// SPEAK RESPONSE
let isSpeaking = false;

function stopSpeaking() {
    isSpeaking = false;
    window.speechSynthesis.pause();
    window.speechSynthesis.cancel();
}

function speakResponse(text) {
    const synth = window.speechSynthesis;
    synth.cancel();
    isSpeaking = true;

    const chunks = text.split(/\n/).filter(c => c.trim());

    const voices = synth.getVoices();
    const preferred = voices.find(v =>
        v.name.includes('Samantha') ||
        v.name.includes('Karen') ||
        v.name.includes('Google UK English Female')
    );

    let i = 0;
    function speakNext() {
        if (!isSpeaking || i >= chunks.length) return;
        const utterance = new SpeechSynthesisUtterance(chunks[i]);
        utterance.rate = 0.78;
        utterance.pitch = 1;
        utterance.volume = 1;
        if (preferred) utterance.voice = preferred;
        utterance.onend = () => {
            i++;
            setTimeout(speakNext, 500);
        };
        synth.speak(utterance);
    }

    speakNext();
}