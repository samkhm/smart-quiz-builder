/* ============================================================
   AZ-900 QUESTION BANK
   ============================================================ */
const QUESTION_BANK = [
  // ===== CLOUD CONCEPTS (25-30%) =====
  {
    id: 1, domain: 'cloud',
    text: 'Which cloud deployment model uses infrastructure owned by a third-party provider and shared among multiple organizations?',
    options: ['Private cloud', 'Public cloud', 'Hybrid cloud', 'Community cloud'],
    answer: 1,
    explanation: 'A <strong>public cloud</strong> is owned and operated by a third-party cloud service provider (like Microsoft Azure) and delivers resources over the public Internet to multiple customers (multi-tenant).'
  },
  {
    id: 2, domain: 'cloud',
    text: 'A company wants to use the public cloud for customer-facing apps but keep sensitive financial data on-premises. Which model should they use?',
    options: ['Public cloud', 'Private cloud', 'Hybrid cloud', 'Multi-cloud'],
    answer: 2,
    explanation: 'A <strong>hybrid cloud</strong> combines public and private clouds, allowing data and apps to be shared between them. This gives flexibility to keep sensitive data on-premises while leveraging public cloud scalability.'
  },
  {
    id: 3, domain: 'cloud',
    text: 'Which cloud service model provides the most control to the customer over the underlying infrastructure?',
    options: ['SaaS', 'PaaS', 'IaaS', 'FaaS'],
    answer: 2,
    explanation: '<strong>IaaS (Infrastructure as a Service)</strong> provides virtualized computing resources. The customer manages OS, middleware, and apps, while the provider manages physical hardware.'
  },
  {
    id: 4, domain: 'cloud',
    text: 'Which of the following is an example of a capital expenditure (CapEx)?',
    options: ['Monthly cloud subscription', 'Purchasing an on-premises server', 'Pay-per-use storage', 'Leasing cloud VMs'],
    answer: 1,
    explanation: '<strong>CapEx</strong> is spent upfront on physical infrastructure (servers, data centers). Cloud services are typically OpEx (operating expense) since you pay as you go.'
  },
  {
    id: 5, domain: 'cloud',
    text: 'Which cloud concept allows resources to be scaled up or down automatically based on demand?',
    options: ['High availability', 'Elasticity', 'Fault tolerance', 'Disaster recovery'],
    answer: 1,
    explanation: '<strong>Elasticity</strong> is the ability to automatically add or remove resources based on demand. Scalability is the ability to handle growth; elasticity is about automatic, on-demand adjustment.'
  },
  {
    id: 6, domain: 'cloud',
    text: 'In the shared responsibility model for IaaS, who is responsible for managing the guest operating system?',
    options: ['Cloud provider', 'Customer', 'Shared equally', 'Third-party auditor'],
    answer: 1,
    explanation: 'In <strong>IaaS</strong>, the customer is responsible for the guest OS, applications, and data. The provider manages physical hardware, networking, and hypervisor.'
  },
  {
    id: 7, domain: 'cloud',
    text: 'Which benefit of cloud computing refers to the ability to access services from anywhere using any internet-connected device?',
    options: ['Elasticity', 'Scalability', 'Ubiquitous access', 'Metered billing'],
    answer: 2,
    explanation: '<strong>Ubiquitous access</strong> means users can access cloud services from anywhere using any internet-connected device — a key benefit of cloud computing.'
  },
  {
    id: 8, domain: 'cloud',
    text: 'A company wants to migrate from an on-premises data center to the cloud to avoid large upfront hardware costs. Which cloud benefit applies?',
    options: ['High availability', 'Stop guessing capacity needs', 'Trade capital expense for operational expense', 'Increase agility'],
    answer: 2,
    explanation: 'Moving to the cloud lets you <strong>trade CapEx for OpEx</strong> — you pay only for what you use instead of investing heavily in hardware upfront.'
  },
  {
    id: 9, domain: 'cloud',
    text: 'Which cloud service model is Microsoft 365 an example of?',
    options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'],
    answer: 2,
    explanation: '<strong>Microsoft 365</strong> is a Software as a Service (SaaS) product — fully managed by Microsoft, with users accessing the software via a browser or app.'
  },
  {
    id: 10, domain: 'cloud',
    text: 'In the shared responsibility model for SaaS, who is responsible for data and access management?',
    options: ['Cloud provider', 'Customer', 'Shared equally', 'Government regulators'],
    answer: 1,
    explanation: 'In <strong>SaaS</strong>, the provider manages almost everything (infrastructure, apps), but the customer is always responsible for their <strong>data, devices, and accounts/access</strong>.'
  },

  // ===== ARCHITECTURE & SERVICES (35-40%) =====
  {
    id: 11, domain: 'architecture',
    text: 'What is an Azure region?',
    options: ['A single data center', 'A set of data centers deployed in a latency-defined perimeter', 'A country', 'A virtual network'],
    answer: 1,
    explanation: 'An <strong>Azure region</strong> is one or more data centers within a latency-defined perimeter, connected through a dedicated regional network. Azure has 60+ regions worldwide.'
  },
  {
    id: 12, domain: 'architecture',
    text: 'Which Azure compute service allows you to deploy applications without managing the underlying infrastructure?',
    options: ['Virtual Machines', 'Azure App Service', 'Azure Batch', 'Azure Dedicated Host'],
    answer: 1,
    explanation: '<strong>Azure App Service</strong> is a PaaS offering that lets you build, deploy, and scale web apps without managing servers or infrastructure.'
  },
  {
    id: 13, domain: 'architecture',
    text: 'Which Azure service provides a fully managed relational database with built-in high availability?',
    options: ['Azure Cosmos DB', 'Azure SQL Database', 'Azure Blob Storage', 'Azure Table Storage'],
    answer: 1,
    explanation: '<strong>Azure SQL Database</strong> is a fully managed PaaS relational database with built-in HA, automated backups, and patching.'
  },
  {
    id: 14, domain: 'architecture',
    text: 'Which Azure storage service is best for storing unstructured data like images, videos, and documents?',
    options: ['Azure Files', 'Azure Blob Storage', 'Azure Queue Storage', 'Azure Disk Storage'],
    answer: 1,
    explanation: '<strong>Azure Blob Storage</strong> is optimized for storing massive amounts of unstructured data (text, binary, images, videos).'
  },
  {
    id: 15, domain: 'architecture',
    text: 'Which Azure service enables you to create virtual networks in the cloud?',
    options: ['Azure Load Balancer', 'Azure Virtual Network (VNet)', 'Azure DNS', 'Azure Firewall'],
    answer: 1,
    explanation: '<strong>Azure Virtual Network (VNet)</strong> enables you to create a private, isolated network in Azure where you can deploy resources like VMs.'
  },
  {
    id: 16, domain: 'architecture',
    text: 'What is the purpose of an Availability Zone in Azure?',
    options: ['To provide geo-redundancy across continents', 'To provide physically separate data centers within a region', 'To provide backup storage', 'To provide CDN caching'],
    answer: 1,
    explanation: '<strong>Availability Zones</strong> are physically separate data centers within an Azure region, each with independent power, cooling, and networking — providing high availability.'
  },
  {
    id: 17, domain: 'architecture',
    text: 'Which Azure service distributes incoming network traffic across multiple VMs to improve availability?',
    options: ['Azure CDN', 'Azure Load Balancer', 'Azure Traffic Manager', 'Azure Application Gateway'],
    answer: 1,
    explanation: '<strong>Azure Load Balancer</strong> distributes incoming traffic across VMs within the same region to improve availability and reliability.'
  },
  {
    id: 18, domain: 'architecture',
    text: 'Which Azure service is a NoSQL, globally distributed database service?',
    options: ['Azure SQL Database', 'Azure Cosmos DB', 'Azure Synapse Analytics', 'Azure Database for MySQL'],
    answer: 1,
    explanation: '<strong>Azure Cosmos DB</strong> is a fully managed NoSQL database with global distribution, elastic scaling, and low-latency reads/writes.'
  },
  {
    id: 19, domain: 'architecture',
    text: 'Which Azure service provides serverless event-driven compute?',
    options: ['Azure VMs', 'Azure Functions', 'Azure App Service', 'Azure Kubernetes Service'],
    answer: 1,
    explanation: '<strong>Azure Functions</strong> is a serverless compute service that runs event-triggered code without provisioning infrastructure — you pay only for execution time.'
  },
  {
    id: 20, domain: 'architecture',
    text: 'What is Azure Resource Manager (ARM)?',
    options: ['A virtual machine type', 'The deployment and management layer of Azure', 'A storage service', 'A security tool'],
    answer: 1,
    explanation: '<strong>Azure Resource Manager (ARM)</strong> is the deployment and management layer of Azure — it provides a consistent management layer for creating, updating, and deleting resources.'
  },

  // ===== SECURITY, PRIVACY, COMPLIANCE & PRICING (30-35%) =====
  {
    id: 21, domain: 'security',
    text: 'Which Azure service provides identity and access management?',
    options: ['Azure Key Vault', 'Azure Active Directory (Entra ID)', 'Azure Security Center', 'Azure Sentinel'],
    answer: 1,
    explanation: '<strong>Azure Active Directory</strong> (now Microsoft Entra ID) is Azure\'s identity and access management service for authentication and authorization.'
  },
  {
    id: 22, domain: 'security',
    text: 'Which Azure service is used to securely store and access secrets like API keys, passwords, and certificates?',
    options: ['Azure Storage', 'Azure Key Vault', 'Azure DevOps', 'Azure Monitor'],
    answer: 1,
    explanation: '<strong>Azure Key Vault</strong> securely stores and tightly controls access to secrets, keys, and certificates.'
  },
  {
    id: 23, domain: 'security',
    text: 'Which Azure service provides unified security management and threat protection across hybrid cloud workloads?',
    options: ['Azure Firewall', 'Microsoft Defender for Cloud', 'Azure DDoS Protection', 'Network Security Groups'],
    answer: 1,
    explanation: '<strong>Microsoft Defender for Cloud</strong> (formerly Azure Security Center) provides unified security management and advanced threat protection for hybrid workloads.'
  },
  {
    id: 24, domain: 'security',
    text: 'Which Azure feature enables multi-factor authentication (MFA)?',
    options: ['Azure Key Vault', 'Azure Active Directory (Entra ID)', 'Azure Security Center', 'Azure Policy'],
    answer: 1,
    explanation: '<strong>Azure AD (Entra ID)</strong> supports MFA — requiring two or more verification methods (password + phone, authenticator app, etc.) to sign in.'
  },
  {
    id: 25, domain: 'security',
    text: 'Which Azure service helps protect against Distributed Denial of Service (DDoS) attacks?',
    options: ['Azure Firewall', 'Azure DDoS Protection', 'Network Security Groups', 'Azure Application Gateway'],
    answer: 1,
    explanation: '<strong>Azure DDoS Protection</strong> helps protect Azure resources from DDoS attacks with always-on traffic monitoring and real-time mitigation.'
  },
  {
    id: 26, domain: 'security',
    text: 'Which Azure tool provides guidance and assurance for data privacy, compliance, and regulations?',
    options: ['Azure Advisor', 'Microsoft Purview', 'Service Trust Portal', 'Azure Monitor'],
    answer: 2,
    explanation: 'The <strong>Service Trust Portal</strong> provides audit reports, compliance guides, and trust documentation about Microsoft cloud services\' security and privacy controls.'
  },
  {
    id: 27, domain: 'security',
    text: 'What is the primary purpose of Azure Government?',
    options: ['Provide free services to nonprofits', 'Offer isolated cloud for US government agencies and their partners', 'Provide AI services', 'Offer discounted pricing to students'],
    answer: 1,
    explanation: '<strong>Azure Government</strong> is a community cloud with isolated data centers for US government agencies, contractors, and partners — meeting strict compliance requirements.'
  },
  {
    id: 28, domain: 'security',
    text: 'Which Azure pricing model lets you commit to 1 or 3 years of usage for significant discounts?',
    options: ['Pay-as-you-go', 'Reserved Instances', 'Spot pricing', 'Free tier'],
    answer: 1,
    explanation: '<strong>Reserved Instances</strong> offer up to 72% savings by committing to 1- or 3-year terms for VMs, SQL DB, Cosmos DB, and other services.'
  },
  {
    id: 29, domain: 'security',
    text: 'Which tool helps estimate the cost of Azure services before deployment?',
    options: ['Azure Cost Management', 'Azure Pricing Calculator', 'Azure Advisor', 'Total Cost of Ownership (TCO) Calculator'],
    answer: 1,
    explanation: 'The <strong>Azure Pricing Calculator</strong> lets you estimate monthly costs for Azure services based on your expected usage and configuration.'
  },
  {
    id: 30, domain: 'security',
    text: 'Which tool compares on-premises costs to Azure cloud costs to help justify migration?',
    options: ['Azure Pricing Calculator', 'Azure Cost Management', 'Azure TCO Calculator', 'Azure Advisor'],
    answer: 2,
    explanation: 'The <strong>Total Cost of Ownership (TCO) Calculator</strong> compares on-premises costs vs. Azure to help you estimate savings from cloud migration.'
  }
];

/* ============================================================
   DOMAIN METADATA
   ============================================================ */
const DOMAIN_META = {
  cloud: {
    name: 'Describe Cloud Concepts',
    weight: '25-30%',
    icon: '☁️'
  },
  architecture: {
    name: 'Azure Architecture & Services',
    weight: '35-40%',
    icon: '🏗️'
  },
  security: {
    name: 'Security, Privacy, Compliance & Pricing',
    weight: '30-35%',
    icon: '🔒'
  }
};

/* ============================================================
   STATE MANAGEMENT
   ============================================================ */
const STORAGE_KEY = 'az900_quiz_data';

let state = {
  currentQuiz: null,
  currentIndex: 0,
  answers: [],
  stats: {
    quizzesTaken: 0,
    totalAnswered: 0,
    bestScore: 0,
    domainStats: {
      cloud: { correct: 0, total: 0 },
      architecture: { correct: 0, total: 0 },
      security: { correct: 0, total: 0 }
    },
    history: []
  }
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      state.stats = { ...state.stats, ...parsed };
    } catch (e) {
      console.error('Failed to load state', e);
    }
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.stats));
}

/* ============================================================
   TAB NAVIGATION
   ============================================================ */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const view = tab.dataset.view;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(view).classList.add('active');
  });
});

/* ============================================================
   QUIZ LOGIC
   ============================================================ */
function startQuiz(mode) {
  let questions;
  if (mode === 'full') {
    questions = shuffleArray([...QUESTION_BANK]).slice(0, 15);
  } else {
    questions = shuffleArray(QUESTION_BANK.filter(q => q.domain === mode));
  }

  if (questions.length === 0) {
    alert('No questions available for this mode.');
    return;
  }

  state.currentQuiz = questions;
  state.currentIndex = 0;
  state.answers = [];

  // Switch to quiz tab
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelector('[data-view="quiz"]').classList.add('active');
  document.getElementById('quiz').classList.add('active');

  renderQuestion();
}

function renderQuestion() {
  const q = state.currentQuiz[state.currentIndex];
  const container = document.getElementById('questionContainer');

  const letters = ['A', 'B', 'C', 'D'];
  const optionsHtml = q.options.map((opt, i) => `
    <div class="option" data-index="${i}" onclick="selectAnswer(${i})">
      <div class="option-letter">${letters[i]}</div>
      <div>${opt}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="question-header">
      <div class="question-number">
        Question ${state.currentIndex + 1} of ${state.currentQuiz.length}
        &nbsp;•&nbsp; ${DOMAIN_META[q.domain].icon} ${DOMAIN_META[q.domain].name}
      </div>
      <div class="timer">⏱️ Practice Mode</div>
    </div>
    <div class="question-text">${q.text}</div>
    <div class="options">${optionsHtml}</div>
    <div class="explanation" id="explanation"></div>
    <div class="quiz-nav">
      <div></div>
      <button class="btn btn-primary" id="nextBtn" onclick="nextQuestion()" style="display:none;">
        ${state.currentIndex === state.currentQuiz.length - 1 ? 'Finish Quiz 🏁' : 'Next Question →'}
      </button>
    </div>
  `;
}

function selectAnswer(index) {
  const q = state.currentQuiz[state.currentIndex];
  const options = document.querySelectorAll('.option');

  // Prevent double-selection
  if (options[0].classList.contains('disabled')) return;

  options.forEach(opt => opt.classList.add('disabled'));

  const isCorrect = index === q.answer;
  options[index].classList.add(isCorrect ? 'correct' : 'incorrect');
  if (!isCorrect) options[q.answer].classList.add('correct');

  // Record answer
  state.answers.push({
    questionId: q.id,
    domain: q.domain,
    selected: index,
    correct: q.answer,
    isCorrect
  });

  // Show explanation
  const expl = document.getElementById('explanation');
  expl.innerHTML = `<strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong> ${q.explanation}`;
  expl.classList.add('show');

  // Show next button
  document.getElementById('nextBtn').style.display = 'inline-block';
}

function nextQuestion() {
  state.currentIndex++;
  if (state.currentIndex >= state.currentQuiz.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

function finishQuiz() {
  const total = state.answers.length;
  const correct = state.answers.filter(a => a.isCorrect).length;
  const percent = Math.round((correct / total) * 100);

  // Update stats
  state.stats.quizzesTaken++;
  state.stats.totalAnswered += total;
  if (percent > state.stats.bestScore) state.stats.bestScore = percent;

  // Update domain stats
  state.answers.forEach(a => {
    state.stats.domainStats[a.domain].total++;
    if (a.isCorrect) state.stats.domainStats[a.domain].correct++;
  });

  // Add to history
  state.stats.history.unshift({
    date: new Date().toISOString(),
    mode: getQuizModeName(),
    total,
    correct,
    percent
  });
  if (state.stats.history.length > 20) state.stats.history = state.stats.history.slice(0, 20);

  saveState();

  // Show results
  showResults({ total, correct, percent, answers: state.answers });

  // Switch to results tab
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelector('[data-view="results"]').classList.add('active');
  document.getElementById('results').classList.add('active');

  updateStatsBar();
  renderDomains();
  renderHistory();
}

function getQuizModeName() {
  const domains = [...new Set(state.currentQuiz.map(q => q.domain))];
  if (domains.length > 1) return '🎯 Full Mock Exam';
  return DOMAIN_META[domains[0]].icon + ' ' + DOMAIN_META[domains[0]].name;
}

/* ============================================================
   RESULTS
   ============================================================ */
function showResults(result) {
  const { total, correct, percent, answers } = result;
  const passed = percent >= 70;

  // Domain breakdown
  const domainBreakdown = {};
  answers.forEach(a => {
    if (!domainBreakdown[a.domain]) domainBreakdown[a.domain] = { correct: 0, total: 0 };
    domainBreakdown[a.domain].total++;
    if (a.isCorrect) domainBreakdown[a.domain].correct++;
  });

  const breakdownHtml = Object.keys(domainBreakdown).map(d => {
    const db = domainBreakdown[d];
    const dp = Math.round((db.correct / db.total) * 100);
    return `
      <div class="breakdown-item">
        <div>
          <strong>${DOMAIN_META[d].icon} ${DOMAIN_META[d].name}</strong>
          <div style="font-size:12px; color:var(--muted); margin-top:3px;">
            ${db.correct} of ${db.total} correct
          </div>
        </div>
        <span class="badge ${dp >= 70 ? 'badge-pass' : 'badge-fail'}">${dp}%</span>
      </div>
    `;
  }).join('');

  const card = document.getElementById('resultsCard');
  card.innerHTML = `
    <div class="results-header">
      <div class="score-circle" style="--score-deg: ${percent * 3.6}deg;">
        <div class="score-percent">${percent}%</div>
        <div class="score-label">${correct}/${total} correct</div>
      </div>
      <div class="results-message ${passed ? 'pass' : 'fail'}">
        ${passed ? '🎉 Great job! You\'re on track to pass!' : '📚 Keep studying — you\'ll get there!'}
      </div>
      <p style="color:var(--muted); font-size:14px;">
        ${passed ? 'You would likely pass the real AZ-900 exam (700/1000 needed).' : 'Pass mark is 700/1000 (≈70%). Review the topics below.'}
      </p>
    </div>
    <h3 style="margin: 20px 0 10px; color: var(--azure-dark);">📊 Domain Breakdown</h3>
    <div class="results-breakdown">${breakdownHtml}</div>
    <div style="text-align:center; margin-top: 20px;">
      <button class="btn btn-primary" onclick="startQuiz('full')">🔄 Take Another Quiz</button>
      <button class="btn btn-secondary" onclick="switchTab('dashboard')">📊 Back to Dashboard</button>
    </div>
  `;
}

function switchTab(view) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelector(`[data-view="${view}"]`).classList.add('active');
  document.getElementById(view).classList.add('active');
}

/* ============================================================
   DASHBOARD: DOMAINS & STATS
   ============================================================ */
function renderDomains() {
  const list = document.getElementById('domainList');
  list.innerHTML = Object.keys(DOMAIN_META).map(d => {
    const meta = DOMAIN_META[d];
    const ds = state.stats.domainStats[d];
    const pct = ds.total > 0 ? Math.round((ds.correct / ds.total) * 100) : 0;
    const level = pct < 50 ? 'low' : pct < 70 ? 'mid' : 'high';
    return `
      <div class="domain">
        <div class="domain-header">
          <div class="domain-name">${meta.icon} ${meta.name}</div>
          <div class="domain-weight">Weight: ${meta.weight}</div>
        </div>
        <div class="progress-bar">
          <div class="progress-fill ${level}" style="width: ${pct}%;"></div>
        </div>
        <div class="domain-stats">
          ${ds.total === 0 ? 'No questions answered yet' : `${ds.correct} / ${ds.total} correct (${pct}%)`}
        </div>
      </div>
    `;
  }).join('');
}

function updateStatsBar() {
  const s = state.stats;

  // Overall readiness: weighted average of domain scores
  let totalWeight = 0, weightedSum = 0;
  Object.keys(s.domainStats).forEach(d => {
    const ds = s.domainStats[d];
    if (ds.total > 0) {
      const pct = (ds.correct / ds.total) * 100;
      // Use rough weight from mid-point of range
      const weights = { cloud: 27.5, architecture: 37.5, security: 32.5 };
      weightedSum += pct * weights[d];
      totalWeight += weights[d];
    }
  });
  const readiness = totalWeight > 0 ? Math.round(weightedSum / totalWeight) : 0;

  document.getElementById('overallReadiness').textContent = readiness + '%';
  document.getElementById('readinessStatus').textContent =
    readiness === 0 ? 'Start practicing!' :
    readiness < 50 ? 'Keep studying 💪' :
    readiness < 70 ? 'Almost there! 📈' :
    'Exam ready! 🎉';

  document.getElementById('quizzesTaken').textContent = s.quizzesTaken;
  document.getElementById('quizzesSub').textContent =
    s.quizzesTaken === 0 ? 'No quizzes yet' :
    s.quizzesTaken === 1 ? '1 quiz completed' :
    `${s.quizzesTaken} quizzes completed`;

  document.getElementById('bestScore').textContent =
    s.bestScore > 0 ? s.bestScore + '%' : '—';
  document.getElementById('bestSub').textContent =
    s.bestScore >= 70 ? 'Passing level reached!' : 'Aim for 70%+';

  document.getElementById('totalAnswered').textContent = s.totalAnswered;
  document.getElementById('answeredSub').textContent =
    s.totalAnswered === 0 ? 'Keep going!' :
    s.totalAnswered < 30 ? 'Great start!' :
    s.totalAnswered < 100 ? 'Solid progress!' :
    'You\'re a pro! 🏆';
}

/* ============================================================
   HISTORY
   ============================================================ */
function renderHistory() {
  const list = document.getElementById('historyList');
  if (state.stats.history.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="icon">📭</div>
        <h3>No quiz history</h3>
        <p>Complete a quiz to see it here.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = state.stats.history.map(h => {
    const date = new Date(h.date);
    const dateStr = date.toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
    return `
      <div class="history-item">
        <div class="history-info">
          <strong>${h.mode}</strong>
          <small>${dateStr}</small>
        </div>
        <div style="text-align:right;">
          <div style="font-weight:700; color: ${h.percent >= 70 ? 'var(--success)' : 'var(--danger)'};">
            ${h.percent}%
          </div>
          <small style="color:var(--muted);">${h.correct}/${h.total}</small>
        </div>
      </div>
    `;
  }).join('');
}

function clearHistory() {
  if (!confirm('Clear all quiz history and stats? This cannot be undone.')) return;
  state.stats = {
    quizzesTaken: 0,
    totalAnswered: 0,
    bestScore: 0,
    domainStats: {
      cloud: { correct: 0, total: 0 },
      architecture: { correct: 0, total: 0 },
      security: { correct: 0, total: 0 }
    },
    history: []
  };
  saveState();
  updateStatsBar();
  renderDomains();
  renderHistory();
  document.getElementById('resultsCard').innerHTML = `
    <div class="empty-state">
      <div class="icon">📝</div>
      <h3>No results yet</h3>
      <p>Complete a quiz to see your results here.</p>
    </div>
  `;
}

/* ============================================================
   UTILITIES
   ============================================================ */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ============================================================
   INITIALIZATION
   ============================================================ */
loadState();
updateStatsBar();
renderDomains();
renderHistory();