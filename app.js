const formData = {
  critical: {
    title: "CRITICAL ILLNESS CLAIM",
    subtitle: "Data Capture",
    ref: "CI-2025-000123",
    policy: [
      ["Policy Type", "Critical Illness"],
      ["Policy Number", "CI-2025-987654"],
      ["Policy Holder", "Etihad Airways PJSC"],
      ["Sum Insured", "AED 100,000"],
      ["Cover Start Date", "01/01/2025"],
      ["Cover End Date", "31/12/2025"]
    ],
    sections: [
      { icon: "👤", title: "1. Employee Details", fields: [
        fetchId("Employee ID", "10012345", 3), f("Employee Full Name", "John Doe", 3), sel("Nationality", "United Arab Emirates", 2), radio("Gender", ["Male", "Female"], "Male", 2), f("DOB", "15/04/1985", 2, false, "date"),
        sel("Marital Status", "Married", 2), f("Occupation / Designation", "Senior Pilot", 2), f("Date of Joining", "10/07/2015", 2, false, "date"), f("Place of Work", "Abu Dhabi", 2, true), f("Contact No.", "+971 50 123 4567", 3), f("Email Address", "ahmad.almansoori@etihad.ae", 3)
      ]},
      { icon: "⚠", title: "2. Incident / Diagnosis Details", fields: [
        f("Date of Incident / Illness", "05/05/2025", 3, true, "date"), f("Date of First Consulting Doctor", "07/05/2025", 3, true, "date"), sel("Type of Illness", "Cancer", 2, true), ta("Description of Critical Illness", "Diagnosed with early stage lung cancer.", 4, true, "37/1000"),
        f("Actual Date of Resumption (if any)", "DD/MM/YYYY", 3, false, "date"), ta("Additional Comments (Optional)", "Undergoing treatment as per oncologist advice.", 6, false, "46/1000")
      ]},
      { icon: "✚", title: "3. Medical Information", fields: [
        f("Medical Practitioner Name", "Dr. James Wilson", 4, true), f("Medical License Number", "DHA-1234567", 4, true), f("Hospital / Clinic Address", "Cleveland Clinic Abu Dhabi, Al Maryah Island, Abu Dhabi, UAE", 4, true)
      ]},
      { icon: "✓", title: "4. Eligibility & Benefit Summary", custom: "criticalCalc" },
      { icon: "📋", title: "5. Claim Details", fields: [
        sel("Claim Status", "Read Only", 3), ta("IMS Remarks (Optional)", "Enter remarks", 4, false, "0/1000"), f("Approved Amount (AED)", "Read Only", 3), f("Date of Submission", "DD/MM/YYYY", 2, false, "date")
      ]}
    ],
    docs: ["Full Medical Reports / Discharge Summary", "Past Medical Reports Prior to Diagnosis Date", "Passport Copy", "Valid UAE Resident Visa Copy", "HR-issued Service Letter Certificate", "Last 3 Months Salary Slips Prior to Event Date", "Additional Medical / Specialist Reports (If any)", "Other Supporting Documents (If any)"],
    consents: ["I confirm that the information provided is true, accurate and complete.", "I authorize Etihad Airways PJSC and its insurers to collect, use and share my medical and employment information for claim assessment purposes.", "I consent to the review of my claim by the insurer and its appointed representatives.", "I understand that any false or misleading information may result in rejection of the claim.", "I acknowledge that my personal data will be processed in accordance with Etihad Airways PJSC Data Privacy Policy and applicable UAE regulations."]
  },
  life: {
    title: "LIFE INSURANCE CLAIM",
    subtitle: "Data Capture",
    ref: "LIFE-2025-000123",
    policy: [
      ["Policy Status", "Active"], ["Policy Type", "Life Insurance"], ["Policy Number", "LIFE-2025-987654"], ["Policy Holder", "Etihad Airways PJSC"], ["Cover Start Date", "01/01/2025"], ["Cover End Date", "31/12/2025"]
    ],
    sections: [
      { icon: "👤", title: "1. Employee Details", fields: [
        fetchId("Employee ID", "10012345", 3), f("Employee Full Name", "John Doe", 3), sel("Nationality", "United Arab Emirates", 2), radio("Gender", ["Male", "Female"], "Male", 2), f("DOB", "15/04/1985", 2, false, "date"),
        sel("Marital Status", "Married", 2), f("Designation", "Senior Officer", 2), f("Date of Joining", "10/07/2015", 2, false, "date"), f("Place of Work", "Abu Dhabi", 2, true), f("Contact Number", "+971 50 123 4567", 3, true), f("Email Address", "ahmad.almansoori@etihad.ae", 3, true)
      ]},
      { icon: "⚠", title: "2. Incident Details", fields: [
        f("Date of Loss", "05/05/2025", 3, true, "date"), f("Place of Loss", "Abu Dhabi, UAE", 3, true), radio("Cause of Death", ["Natural Death", "Accidental Death"], "Natural Death", 3, true, true), ta("Brief Details of Incident", "Employee passed away due to cardiac arrest.", 3, true, "44/1000")
      ]},
      { icon: "💼", title: "3. Employment Information", fields: [
        f("Annual Basic Salary (AED)", "240,000.00", 3, true), radio("Was employee actively at work?", ["Yes", "No"], "Yes", 3, true), f("Date last actively at work", "04/05/2025", 3, true, "date")
      ]},
      { icon: "📋", title: "4. Claim Details", fields: [
        radio("Claim Type", ["Death - Any Cause", "Terminal Illness Benefit"], "Death - Any Cause", 3), f("Claim Status", "Read Only", 3), f("Approved Amount (AED)", "Read Only", 3), ta("IMS Remarks (Optional)", "Enter IMS remarks", 3, false, "0/1000")
      ]},
      { icon: "🧮", title: "5. Life Benefit Calculation", custom: "lifeCalc" }
    ],
    docs: ["Signed Claim Form", "Death Certificate", "Medical Report confirming cause of death / terminal illness", "Post Mortem / Forensic Report (if applicable)", "Police Report (For accidental death)"],
    consents: ["I confirm that the information provided is true, accurate and complete.", "I consent to the sharing of my personal and medical information for claim assessment.", "I authorize Etihad Airways PJSC and its insurers to collect, use and retain my data for the purpose of claim processing.", "I understand my data will be processed in accordance with Etihad Airways Privacy Policy."]
  },
  pa: {
    title: "PERSONAL ACCIDENT CLAIM",
    subtitle: "Data Capture",
    ref: "PA-2025-000123",
    policy: [
      ["Policy Type", "Personal Accident"], ["Policy Number", "PA-2025-987654"], ["Policy Holder", "Etihad Airways PJSC"], ["Currency", "AED"], ["Sum Insured", "AED 200,000"]
    ],
    sections: [
      { icon: "👤", title: "1. Employee Details", fields: commonEmployee() },
      { icon: "⚠", title: "2. Incident Details", fields: [
        f("Date of Incident", "05/05/2025", 3, true, "date"), f("Place of Incident", "Abu Dhabi Airport", 3, true), radio("Type of Disablement / Claim Type", ["Temporary Total Disablement (TTD)", "Permanent Partial Disablement (PPD)", "Permanent Total Disablement (PTD)"], "Temporary Total Disablement (TTD)", 3, true, true), ta("Brief Incident Details", "Slipped while entering aircraft and injured left leg.", 3, true, "0/1000")
      ]},
      { icon: "✚", title: "3. Medical Information", fields: [
        f("Date & First Consulting Doctor", "06/05/2025", 3, true, "date"), f("Date First Reported Unfit to Fly", "07/05/2025", 3, true, "date"), f("Sick Leave Start Date", "06/05/2025", 2, true, "date"), f("Sick Leave End Date", "DD/MM/YYYY", 2, false, "date"), f("Actual Date of Resumption (if any)", "DD/MM/YYYY", 2, false, "date"),
        f("Medical Practitioner Name", "Dr. James Wilson", 4, true), f("Hospital Details", "Cleveland Clinic Abu Dhabi, UAE", 5, true)
      ]},
      { icon: "💼", title: "4. Policy & Salary Information", fields: [
        f("Last Drawn Monthly Salary (AED)", "24,000.00", 3), f("Currency", "AED", 3), f("AED Equivalent", "24,000.00", 3), f("Approved Claim Amount (AED)", "To be calculated by IMS", 3)
      ], note: "Salary details are fetched from Payroll system and will be used for claim calculations." },
      { icon: "🧮", title: "5. Claim Summary (Calculated)", custom: "paCalc" }
    ],
    docs: ["Accident / Incident Report", "Police Report (if applicable)", "Sick Leave Certificates", "Detailed Medical Reports", "Passport + Emirates ID", "Last 3 Months Salary Slips", "Return to Work Medical Certificate (if applicable)", "Any Other Supporting Documents"],
    consents: formDataCriticalConsents()
  },
  pip: {
    title: "Pilot Income Protection (PIP) Claim",
    subtitle: "Step 1 of 3 - Data Capture",
    ref: "PIP-2025-000123",
    policy: [
      ["Policy Status", "Active"], ["Policy Type", "Pilot Income Protection"], ["Policy Number", "PIP-2025-987654"], ["Policy Holder", "Etihad Airways PJSC"], ["Cover Start Date", "01/01/2025"], ["Cover End Date", "31/12/2025"]
    ],
    sections: [
      { icon: "👤", title: "1. Employee Details", fields: pipEmployee() },
      { icon: "⚠", title: "2. Incident Details", fields: [
        f("Date of Incident", "05/05/2025", 3, true, "date"), f("Date first consulted Doctor", "06/05/2025", 2, true, "date"), f("Date first declared unfit to fly", "07/05/2025", 2, true, "date"), f("Place of Incident", "Abu Dhabi, UAE", 3, true),
        radio("Nature of Injury / Illness", ["Occupational Injury", "Accident Outside Workplace", "Illness"], "Illness", 5, true), ta("Brief details of injury / Illness / diagnosis", "Fracture of left tibia during ground handling incident.", 7, true, "58/1000")
      ]},
      { icon: "✚", title: "3. Medical & Leave Details", fields: [
        f("Sick Leave Start Date", "08/05/2025", 3, true, "date"), f("Sick Leave End Date (Optional)", "30/06/2025", 3, false, "date"), f("Medical Practitioner Name", "Dr. James Wilson", 3, true), f("Hospital Details & Contact Information", "Cleveland Clinic Abu Dhabi, +971 2 412 3456", 3, true),
        f("Specify the period during which you were on sick leave.", "Auto calculated", 4), f("Actual date of resumption of duty (Optional)", "01/07/2025", 3, false, "date"), ta("Any additional comments or information (Optional)", "Physiotherapy ongoing.", 5, false, "23/1000")
      ]},
      { icon: "📋", title: "4. Claim Details", fields: [
        f("Date of last actively at work", "07/05/2025", 2, false, "date"), f("Approve Claim Amount - Original Currency", "Read only", 3, true), f("Approve Claim Amount - AED", "Read only", 3, true), f("Claim Status", "Read only", 3),
        f("General Comments / Remarks by IMS (Optional)", "IMS comments (read only to employee)", 12)
      ]},
      { icon: "🧮", title: "5. PIP Claim Calculation", custom: "pipCalc" }
    ],
    docs: ["Self-Declaration Form", "Medical Reports", "Accident Report (if applicable)", "GCAA / EAMC Suspension Letter", "Completed & Signed Claim Form", "Customer Data Diligence Form", "Bank Details Form", "Passport Copy", "UAE Residency Permit", "Emirates ID Copy", "Last 12 Months Payslips"],
    optionalDocs: ["Ongoing Monthly Medical Reports", "Additional Supporting Documents"],
    consents: ["Declaration Accuracy", "Authorization Validity and Withdrawal", "Data Protection & Confidentiality"]
  }
};

function f(label, value, w = 3, req = false, type = "text") { return { kind: "field", label, value, w, req, type }; }
function fetchId(label, value, w = 3) { return { kind: "field", label, value, w, req: true, type: "text", button: "Fetch Details" }; }
function sel(label, value, w = 3, req = false) { return { kind: "select", label, value, w, req }; }
function ta(label, value, w = 4, req = false, count = "") { return { kind: "textarea", label, value, w, req, count }; }
function radio(label, options, selected, w = 3, req = false, stack = false) { return { kind: "radio", label, options, selected, w, req, stack }; }
function commonEmployee() {
  return [
    fetchId("Employee ID", "10012345", 3), f("Employee Full Name", "John Doe", 3), sel("Nationality", "United Arab Emirates", 2), radio("Gender", ["Male", "Female"], "Male", 2), f("DOB", "15/04/1985", 2, false, "date"),
    sel("Marital Status", "Married", 2), f("Designation", "Senior Pilot", 2), f("Date of Joining", "10/07/2015", 2, false, "date"), f("Place of Work", "Abu Dhabi", 2, true), f("Contact Number", "+971 50 123 4567", 3, true), f("Email Address", "ahmad.almansoori@etihad.ae", 3, true)
  ];
}
function pipEmployee() {
  return [
    fetchId("Employee ID", "10012345", 3), f("Employee Name", "John Doe", 3), sel("Nationality", "United Arab Emirates", 2), radio("Gender", ["Male", "Female"], "Male", 2), f("DOB", "15/04/1985", 2, false, "date"),
    sel("Marital Status", "Married", 2), f("Occupation / Designation", "Senior Pilot", 2), f("Date of Joining", "10/07/2015", 2, false, "date"), f("Place of Work", "Abu Dhabi", 2, true), f("Contact No.", "+971 50 123 4567", 3), f("Email Address", "ahmad.almansoori@etihad.ae", 3)
  ];
}
function formDataCriticalConsents() {
  return ["I confirm that the information provided is true, accurate and complete.", "I authorize Etihad Airways PJSC and its insurers to collect, use and share my medical and employment information for claim assessment purposes.", "I consent to the review of my claim by the insurer and its appointed representatives.", "I understand that any false or misleading information may result in rejection of the claim.", "I acknowledge that my personal data will be processed in accordance with Etihad Airways PJSC Data Privacy Policy and applicable UAE regulations."];
}

function toDateValue(value) {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value || "");
  return match ? `${match[3]}-${match[2]}-${match[1]}` : "";
}

function escapeAttr(value) {
  return String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function renderField(item, readOnly = false) {
  const cls = `field w${item.w || 3}`;
  const req = item.req ? " req" : "";
  if (item.button) {
    return `<div class="${cls}"><label class="${req}">${item.label}</label><div class="fetch-control"><input class="control employee-id-input" type="text" value="${item.value}" aria-label="${item.label}"><button class="fetch-btn" type="button">${item.button}</button></div></div>`;
  }
  if (readOnly) {
    if (item.kind === "radio") {
      const opts = item.options.map(o => `<span class="radio readonly-radio" data-option="${escapeAttr(o)}"><i class="dot"></i>${o}</span>`).join("");
      return `<div class="${cls}"><label class="${req}">${item.label}</label><div class="radios view-only" data-fetch-radio="${escapeAttr(item.selected)}">${opts}</div></div>`;
    }
    return `<div class="${cls}"><label class="${req}">${item.label}</label><div class="control view-only pending" data-fetch-value="${escapeAttr(item.value)}">Fetch details</div></div>`;
  }
  if (item.kind === "select") {
    return `<div class="${cls}"><label class="${req}">${item.label}</label><select class="control"><option>${item.value}</option></select></div>`;
  }
  if (item.kind === "textarea") {
    return `<div class="${cls}"><label class="${req}">${item.label}</label><div class="textarea-wrap"><textarea class="control">${item.value}</textarea><span class="count">${item.count}</span></div></div>`;
  }
  if (item.kind === "radio") {
    const style = item.stack ? "display:grid;gap:10px" : "";
    const opts = item.options.map(o => `<span class="radio"><i class="dot ${o === item.selected ? "on" : ""}"></i>${o}</span>`).join("");
    return `<div class="${cls}"><label class="${req}">${item.label}</label><div class="radios" style="${style}">${opts}</div></div>`;
  }
  if (item.type === "date") {
    return `<div class="${cls}"><label class="${req}">${item.label}</label><input class="control date-control" type="date" value="${toDateValue(item.value)}" placeholder="DD/MM/YYYY"></div>`;
  }
  return `<div class="${cls}"><label class="${req}">${item.label}</label><div class="control">${item.value}</div></div>`;
}

function renderCustom(type) {
  if (type === "criticalCalc") return `
    <div class="calc-grid">
      <div class="calc-card"><h4>A. Waiting Period Validation</h4><dl><dt>Date of Joining</dt><dd>10/07/2015</dd><dt>Diagnosis Date</dt><dd>05/05/2025</dd><dt>Days Since Joining</dt><dd class="green-text">3,587 Days</dd><dt>Required Waiting</dt><dd>90 Days</dd></dl><div class="ok-box">✓ Eligible<br>Waiting period completed</div></div>
      <div class="calc-card"><h4>B. Age Eligibility</h4><dl><dt>Age (as on diagnosis date)</dt><dd>39 Years</dd><dt>Maximum Allowed Age</dt><dd>65 Years</dd></dl><div class="ok-box">✓ Eligible<br>Within age limit</div></div>
      <div class="calc-card"><h4>C. Illness Validation</h4><dl><dt>Selected Illness</dt><dd>Cancer</dd><dt>Status</dt><dd></dd></dl><div class="ok-box">✓ Covered Illness</div><p><b style="color:var(--blue)">View Illness List</b></p></div>
      <div class="calc-card"><h4>D. Benefit Information</h4><dl><dt>Sum Insured (Fixed)</dt><dd>AED 100,000</dd><dt>Benefit Payable</dt><dd></dd></dl><div class="big-money">AED 100,000</div><div class="info-box">ⓘ Flat payout. Payable only once per eligible diagnosis.</div></div>
    </div><div class="ok-box" style="margin-top:10px">✓ All eligibility conditions met. Claim is eligible for review.</div>`;
  if (type === "lifeCalc") return `
    <div class="calc-grid">
      <div class="calc-card"><h4>Employee Classification</h4><label>Employee Class</label><div class="control">Class 1</div><label>Designation Grade</label><div class="control">Policy Multiplier</div><div class="control">4 x Annual Basic Salary</div></div>
      <div class="calc-card"><h4>Benefit Calculation</h4><dl><dt>Annual Basic Salary (AED)</dt><dd>240,000.00</dd><dt>Eligible Sum Insured</dt><dd class="green-text">960,000.00</dd></dl><div class="info-box">Formula: Annual Basic Salary x Policy Multiplier<br>240,000 x 4 = 960,000</div></div>
      <div class="calc-card"><h4>Policy Limits Validation</h4><dl><dt>Minimum Sum Insured</dt><dd>AED 120,000</dd><dt>Maximum Sum Insured</dt><dd>AED 5,000,000</dd></dl><div class="ok-box">✓ Within policy limit</div></div>
      <div class="calc-card"><h4>Benefit Breakdown</h4><dl><dt>Eligible Sum Insured</dt><dd>AED 960,000</dd><dt>Terminal Illness Benefit (50%)</dt><dd>AED 100,000</dd><dt>Residual Death Benefit</dt><dd class="green-text">AED 860,000</dd></dl></div>
    </div><div class="warn-box" style="margin-top:10px">ⓘ If Terminal Illness Benefit is paid, the remaining balance can be claimed under Death Benefit.</div>
    <div class="ok-box" style="margin-top:10px;display:grid;grid-template-columns:repeat(4,1fr)"><span>✓ Validation Status</span><span>✓ Policy Active</span><span>✓ Employee Eligible</span><span style="color:#985900">△ Required Documents Pending</span></div>`;
  if (type === "paCalc") return `
    <div class="calc-grid">
      <div class="calc-card"><h4>Total Sick Leave Days</h4><div class="big-money" style="color:var(--ink)">60 Days</div><p>(06/05/2025 - 04/07/2025)</p></div>
      <div class="calc-card"><h4>Claimable Days <small>(After Elimination)</small></h4><div class="big-money" style="color:var(--ink)">45 Days</div><p>(Total Days - 15 Days)</p></div>
      <div class="calc-card"><h4>Weekly Salary (AED)</h4><div class="big-money" style="color:var(--ink)">5,538.46</div><p>(Monthly Salary x 12 / 52)</p></div>
      <div class="calc-card"><h4>TTD Claim Amount (AED)</h4><div class="big-money" style="color:var(--ink)">6,230.77</div><p>(Weekly Salary x 45 / 7)</p></div>
    </div><div class="warn-box" style="margin-top:10px">ⓘ Calculations are indicative and subject to IMS review and policy terms.</div>`;
  if (type === "pipCalc") return `
    <div class="calc-grid">
      <div class="calc-card"><h4>A. Income & Salary Details</h4><dl><dt>Basic Salary (Avg. last 12 months)</dt><dd>USD 11,500</dd><dt>Annual Salary (12 months)</dt><dd class="blue-text">USD 138,000</dd><dt>Pre-Disability Monthly Income</dt><dd class="blue-text">USD 11,500</dd></dl><div class="info-box">ⓘ Pre-Disability Monthly Income = Total Salary for Past 12 Months / 12</div></div>
      <div class="calc-card"><h4>B. Waiting Period Validation</h4><dl><dt>Total Suspension Days</dt><dd>105 Days</dd><dt>Waiting Period</dt><dd>90 Days</dd><dt>Eligible Days</dt><dd class="green-text">15 Days</dd></dl><div class="ok-box">✓ Eligible - Benefits start from Day 91</div></div>
      <div class="calc-card"><h4>C. Benefit Calculation</h4><dl><dt>Maximum Benefit by Rank (Captain)</dt><dd>USD 6,000</dd><dt>Calculated Benefit Amount (75%)</dt><dd>USD 8,625</dd><dt>Monthly Payable Benefit (Lower of both)</dt><dd class="green-text">USD 6,000</dd><dt>Pro-rata Calculation (This Month)</dt><dd></dd><dt>Eligible Days This Month</dt><dd>5 Days</dd><dt>Pro-rata Payable Amount</dt><dd class="blue-text">USD 1,000</dd></dl><div class="info-box">Pro-rata Amount = Monthly Payable Amount / 30 x Eligible Days</div></div>
      <div class="calc-card"><h4>D. Benefit Duration Eligibility</h4><dl><dt>Employee Age</dt><dd>42 Years</dd><dt>Age Band</dt><dd>Below 58 Years</dd><dt>Max Benefit Duration</dt><dd>60 Months</dd><dt>Until Age</dt><dd>60 Years (whichever earlier)</dd></dl><div class="warn-box">ⓘ Benefits payable until earliest of: 60 months, or Employee reaches 60 years, or Death</div></div>
    </div><div class="warn-box" style="margin-top:10px">△ Important: Suspension period must exceed 90 days. Medical suspension evidence is required. All mandatory documents must be uploaded.</div>`;
  return "";
}

function renderClaim(type, data) {
  const policyCols = data.policy.map(([k, v]) => `<div><label>${k}</label><b>${v}</b></div>`).join("");
  const sections = data.sections.map(section => {
    const employeeReadOnly = section.title.includes("Employee Details");
    return `
    <article class="section">
      <h3 class="section-title"><span>${section.icon}</span>${section.title}</h3>
      ${section.custom ? renderCustom(section.custom) : `<div class="field-grid">${section.fields.map(field => renderField(field, employeeReadOnly && !field.button)).join("")}</div>`}
      ${section.note ? `<div class="warn-box" style="margin-top:12px">ⓘ ${section.note}</div>` : ""}
    </article>
  `;
  }).join("");
  const docs = data.docs.map((d, i) => `<div class="doc-row"><b>${i + 1}.</b><span>${d}<span class="req"></span></span><button class="upload-btn">↥ Upload</button><span>ⓘ</span></div>`).join("");
  const optionalDocs = data.optionalDocs ? `<b class="optional-title">Optional Documents</b><div class="doc-list optional-docs">${data.optionalDocs.map((d, i) => `<div class="doc-row"><b>${i + 1}.</b><span>${d}</span><button class="upload-btn">↥ Upload</button><span>ⓘ</span></div>`).join("")}</div>` : "";
  const consents = data.consents.map(c => `<div class="consent-row"><i class="box"></i><span>${c}<span class="req"></span></span><a>Read more</a><span>⌄</span></div>`).join("");
  return `
    <div class="claim-wrap">
      <div class="claim-stepper">
        <div class="step-track">
          ${["Submitted", "IMS Review", "Insurer Review", "Approved", "Closed"].map((s, i) => `<div class="track-step ${i === 0 ? "active" : ""}"><i>${i + 1}</i><span>${s}</span></div>`).join("")}
        </div>
        <div class="claim-ref"><div><b>Claim Reference No.</b><strong>${data.ref} ⧉</strong></div><div><b>Claim Status</b><strong><span class="pill amber">Draft</span></strong></div></div>
      </div>
      <div class="policy-strip">${policyCols}<div><button class="outline-btn">◎ View Policy Details</button></div></div>
      <div class="form-layout">
        <div class="form-main">${sections}</div>
        <aside class="form-side">
          <article class="side-card">
            <h3><span class="title-icon">📎</span> 6. List of Documents to be Shared</h3>
            <p>Please upload the required documents below.</p>
            <b>Mandatory Documents</b>
            <div class="doc-list">${docs}</div>
            <button class="add-doc">＋ ${type === "life" ? "Add Additional Document" : "Add New Document Type"} <span style="float:right">⌄</span></button>
            ${optionalDocs}
            <small>Allowed file types: PDF, JPG, PNG (Max size: 10MB per file)</small>
          </article>
          <article class="side-card">
            <h3><span class="title-icon">🛡</span> 7. Declaration & Consent</h3>
            <p><b>Please read and agree to the following statements to proceed.</b></p>
            <div class="consent-list">${consents}</div>
            <div class="agree radio"><i class="dot"></i><b>I have read, understood and agree to the above declarations.<span class="req"></span></b></div>
            <p style="margin-left:28px">You must agree to all the above to submit the claim.</p>
          </article>
        </aside>
      </div>
      <div class="footer-actions">
        <button class="outline-btn">Clear All</button>
        <span class="note">Note: Fields marked with <b style="color:var(--red)">*</b> are mandatory unless stated otherwise.</span>
        <button class="outline-btn">${type === "critical" ? "Draft" : "Save Draft"}</button>
        <button class="primary-btn">Submit Claim -></button>
      </div>
    </div>`;
}

function renderDownloads() {
  const rows = [
    ["Personal Accident Claim Form", "Required for PA claims"],
    ["Self Declaration Form", "Mandatory for all claims"],
    ["Bank Details Form", "For claim benefit payment"],
    ["Customer Due Diligence (CDD) Form", "Know Your Customer (KYC) requirements"],
    ["FAQ Guide", "Common questions and answers"]
  ];
  document.querySelector(".download-list").innerHTML = rows.map(r => `<div class="download-row"><span class="badge gold small">□</span><div><b>${r[0]}</b><small>${r[1]}</small></div><a>⇩ Download</a></div>`).join("");
}

function setScreen(id) {
  document.body.classList.toggle("pip-theme", id === "pip");
  document.querySelectorAll(".screen").forEach(s => s.classList.toggle("active", s.id === id));
  document.querySelectorAll("[data-screen]").forEach(b => b.classList.toggle("active", b.dataset.screen === id));
  const data = formData[id];
  const title = document.getElementById("pageTitle");
  const sub = document.getElementById("pageSub");
  const save = document.querySelector(".ghost-btn.save");
  if (data) {
    title.textContent = data.title;
    sub.textContent = data.subtitle;
    if (save) {
      save.style.display = "none";
      save.style.alignItems = "center";
      save.style.justifyContent = "center";
    }
  } else {
    title.textContent = id === "dashboard" ? "Life Insurance Claim Portal" : document.querySelector(`#${id} h2`)?.textContent || "Life Insurance Claim Portal";
    sub.textContent = id === "dashboard" ? "Track your insurance claims and complete pending actions." : "";
    if (save) save.style.display = "none";
  }
}

Object.entries(formData).forEach(([type, data]) => {
  document.querySelector(`#${type}`).innerHTML = renderClaim(type, data);
});
renderDownloads();
document.querySelector("#claims").innerHTML = `
  <h2>My Claims</h2>
  <p>Entries created in the claim portal.</p>
  <div class="claim-entries">
    <article><b>LIFE-2025-000123</b><span>Life Insurance Claim</span><em>Draft</em><button class="outline-btn" data-screen="life">Open</button></article>
    <article><b>CI-2025-000123</b><span>Critical Illness Claim</span><em>Draft</em><button class="outline-btn" data-screen="critical">Open</button></article>
    <article><b>PA-2025-000123</b><span>Personal Accident Claim</span><em>Draft</em><button class="outline-btn" data-screen="pa">Open</button></article>
    <article><b>PIP-2025-000123</b><span>Pilot Income Protection Claim</span><em>Draft</em><button class="outline-btn" data-screen="pip">Open</button></article>
  </div>`;
document.querySelector("#raise").innerHTML = `
  <h2>Raise Claim</h2>
  <p>Select a claim type to open the matching data capture form.</p>
  <div class="claim-picks">
    <button class="outline-btn" data-screen="critical">Critical Illness</button>
    <button class="outline-btn" data-screen="life">Life Insurance</button>
    <button class="outline-btn" data-screen="pa">Personal Accident</button>
    <button class="outline-btn" data-screen="pip">Pilot Income Protection</button>
  </div>`;
document.addEventListener("click", e => {
  const fetchButton = e.target.closest(".fetch-btn");
  if (fetchButton) {
    const section = fetchButton.closest(".section");
    section.querySelectorAll("[data-fetch-value]").forEach(field => {
      field.textContent = field.dataset.fetchValue;
      field.classList.remove("pending");
    });
    section.querySelectorAll("[data-fetch-radio]").forEach(group => {
      group.querySelectorAll(".readonly-radio").forEach(option => {
        option.querySelector(".dot").classList.toggle("on", option.dataset.option === group.dataset.fetchRadio);
      });
      group.classList.remove("pending");
    });
    fetchButton.textContent = "Fetched";
    fetchButton.classList.add("fetched");
    return;
  }
  const target = e.target.closest("[data-screen]");
  if (target) setScreen(target.dataset.screen);
});
