
  const questions = [
  {
    id: 1,
    question: "Which documents does SAP Transportation Management support when planning transportation with SAP S/4HANA?",
    options: [
      "Material documents",
      "Stock transport orders",
      "Transfer orders",
      "Inbound deliveries",
      "Returns"
    ],
    correctAnswers: [1, 3, 4]
  },
  {
    id: 2,
    question: "What is the result of posting a vendor's invoice?",
    options: [
      "The material ledger document is generated",
      "The vendor's account is cleared of open items",
      "The purchase order history is updated",
      "Vendor payment is posted"
    ],
    correctAnswers: [2]
  },
  {
    id: 3,
    question: "For which object do you plan activity prices?",
    options: ["Cost center", "Work center", "WBS element", "Internal order"],
    correctAnswers: [0]
  },
  {
    id: 4,
    question: "You've been tasked with converting SAP Fiori Tile groups to SAP Fiori Spaces. Which assignment should be made?",
    options: [
      "Assign Tiles to Pages",
      "Assign Spaces to Pages",
      "Assign Pages to Spaces",
      "Assign Sections to Spaces"
    ],
    correctAnswers: [2]
  },
  {
    id: 5,
    question: "What is created when you post a valuated goods receipt for consumable materials?",
    options: [
      "Material ledger document",
      "Vendor invoice document",
      "Controlling document",
      "Commitment"
    ],
    correctAnswers: [2]
  },
  {
    id: 6,
    question: "Which of the following is the basic organizational unit in Management Accounting?",
    options: ["Cost Center", "Client", "Company Code", "Controlling Area"],
    correctAnswers: [3]
  },
  {
    id: 7,
    question: "You post an invoice to purchase a company car. What accounts are posted in the journal entry?",
    options: [
      "Supplier account",
      "Asset account",
      "Material account",
      "Tax account",
      "Customer account"
    ],
    correctAnswers: [0, 1, 3]
  },
  {
    id: 8,
    question: "Which hierarchy is permitted in Management Accounting?",
    options: [
      "Controlling area assigned to plant",
      "Controlling area assigned to operating concern",
      "Operating concern assigned to company code",
      "Operating concern assigned to controlling area"
    ],
    correctAnswers: [3]
  },
  {
    id: 9,
    question: "Why might you create an equipment master record?",
    options: [
      "To report usage time at a functional location",
      "To perform and record maintenance tasks long-term",
      "To represent technical system structures",
      "To collect and evaluate technical data long-term"
    ],
    correctAnswers: [1, 3]
  },
  {
    id: 10,
    question: "What is the result of document splitting?",
    options: [
      "Additional logistical documents",
      "Additional controlling documents",
      "Additional values",
      "Additional financial documents"
    ],
    correctAnswers: [3]
  },

  /* ---------- CONTINUE ---------- */

  {
    id: 11,
    question: "What are functions of SAP Extended Warehouse Management?",
    options: [
      "Putaway with transfer orders",
      "Mobile device integration",
      "Storage-bin-level determination",
      "Inventory management at storage location level"
    ],
    correctAnswers: [1, 2]
  },
  {
    id: 12,
    question: "Which object is created to report on market characteristics?",
    options: [
      "Sales organization",
      "Profit center",
      "Profitability segment",
      "Segment"
    ],
    correctAnswers: [2]
  },
  {
    id: 13,
    question: "What must you enter in a purchase order to purchase a material for a cost center?",
    options: [
      "Purchase order item category",
      "Storage location",
      "Activity type",
      "Account assignment category"
    ],
    correctAnswers: [3]
  },
  {
    id: 14,
    question: "Which organizational unit should be extended for a new supplier?",
    options: [
      "Purchasing Organization",
      "Company Code",
      "Plant",
      "Purchasing Group"
    ],
    correctAnswers: [0]
  },
  {
    id: 15,
    question: "What document is generated for an external network activity?",
    options: [
      "Production order",
      "Sales order",
      "Reservation",
      "Purchase requisition"
    ],
    correctAnswers: [3]
  },
    {
    id: 15,
    question: "What type of document is generated for an external network activity?",
    options: [
      "Production order",
      "Sales order",
      "Reservation",
      "Purchase requisition"
    ],
    correctAnswers: [3]
  },
  {
    id: 16,
    question: "What general ledger accounts receive postings when performing the goods receipt?",
    options: [
      "Vendor reconciliation account",
      "Tax account",
      "Consumption account",
      "GR/IR account"
    ],
    correctAnswers: [0, 3]
  },
  {
    id: 17,
    question: "In a project, what is the correct term for a group of dependencies, activities, and relationships sequenced in chronological order?",
    options: [
      "Work breakdown structure",
      "Project planning",
      "Routing",
      "Network"
    ],
    correctAnswers: [3]
  },
  {
    id: 18,
    question: "Which of the following applies to Sales and Distribution enterprise structures?",
    options: [
      "A division can only be assigned to one sales organization",
      "A sales organization can only be assigned to one company code",
      "A sales organization can be assigned to more than one company code",
      "A distribution channel can be assigned to many sales organizations",
      "A division can be assigned to more than one sales organization"
    ],
    correctAnswers: [1, 3, 4]
  },
  {
    id: 19,
    question: "What activities can an employee complete using employee self-service?",
    options: [
      "Enroll in a training course",
      "Perform compensation planning",
      "Enter work times",
      "Recruit employees",
      "Update banking information"
    ],
    correctAnswers: [0, 2, 4]
  },
  {
    id: 20,
    question: "What are some characteristics of the SAP Fiori UX design?",
    options: [
      "Function-based applications",
      "Role-based applications",
      "Adaptive to devices",
      "Multiple access entry points"
    ],
    correctAnswers: [1, 2]
  },
  {
    id: 21,
    question: "What are the integration points between a fixed asset and a cost center?",
    options: [
      "Asset creation",
      "Asset acquisition",
      "Asset book value",
      "Depreciation run"
    ],
    correctAnswers: [0, 3]
  },
  {
    id: 22,
    question: "What can a successful MRP run create?",
    options: [
      "Dependent requirements",
      "Purchase orders",
      "Reservations",
      "Planned independent requirements"
    ],
    correctAnswers: [0]
  },
  {
    id: 23,
    question: "How can you post internal labor costs to a network activity?",
    options: [
      "By activity allocation",
      "By distribution",
      "By confirmation",
      "By service entry sheet"
    ],
    correctAnswers: [0, 2]
  },
  {
    id: 24,
    question: "What action assigns actual costs to a project?",
    options: [
      "Material availability check",
      "Saving a purchase order",
      "Material withdrawal from stock",
      "Releasing a project budget"
    ],
    correctAnswers: [2]
  },
  {
    id: 25,
    question: "During which process step are financial accounting documents posted when purchasing raw materials?",
    options: [
      "Save purchase order",
      "Approval of purchase requisition",
      "Inbound delivery to warehouse",
      "Post valuated goods receipt"
    ],
    correctAnswers: [3]
  },
  {
    id: 26,
    question: "Which SAP solution enhances procurement of external services?",
    options: [
      "SAP Ariba",
      "SAP Concur",
      "SAP SuccessFactors",
      "SAP Fieldglass"
    ],
    correctAnswers: [3]
  },
  {
    id: 27,
    question: "What does a work center control?",
    options: [
      "Availability of capacity",
      "Calculation of costs of work performed",
      "Release of production orders",
      "Valuation of BOM components"
    ],
    correctAnswers: [0, 1]
  },
  {
    id: 28,
    question: "What are the benefits of using a business partner in SAP S/4HANA?",
    options: [
      "Vendors managed separately from customers",
      "Redundant data is reduced",
      "Data architecture is harmonized",
      "General data unique per role"
    ],
    correctAnswers: [1, 2]
  },
  {
    id: 29,
    question: "In a warehouse, what represents the physical location where goods are stored?",
    options: [
      "Plant",
      "Storage bin",
      "Storage type",
      "Storage location"
    ],
    correctAnswers: [1]
  },
  {
    id: 30,
    question: "What master data record can be created automatically when creating an equipment master?",
    options: [
      "Functional location",
      "Material",
      "Asset",
      "Maintenance BOM"
    ],
    correctAnswers: [2]
  },
  {
  id: 30,
  question: "You have created an equipment master record. What other master data record can be created automatically?",
  options: ["Functional location", "Material", "Asset", "Maintenance BOM"],
  correctAnswers: [2]
},
{
  id: 31,
  question: "Which action updates the costing-based profitability analysis?",
  options: ["Post goods issue", "Save the billing document", "Post customer payment", "Create outbound delivery"],
  correctAnswers: [1]
},
{
  id: 32,
  question: "Which of the following are advantages of SAP Business Technology Platform?",
  options: [
    "Unified application development environment",
    "Optimized for any software",
    "Uses latest machine learning innovations",
    "Uses SAP Fiori Spaces",
    "Flexible workflows"
  ],
  correctAnswers: [0, 2, 4]
},
{
  id: 33,
  question: "Which of the following can be maintained in a maintenance notification?",
  options: ["Materials planning", "Capacity requirements", "Tasks", "Cause of damage", "Equipment"],
  correctAnswers: [2, 3, 4]
},
{
  id: 34,
  question: "What is the purpose of using a Work Breakdown Structure (WBS)?",
  options: [
    "Evaluate aggregated data",
    "Schedule warehouse tasks",
    "Manage equipment",
    "Allocate budgets",
    "Define responsibilities"
  ],
  correctAnswers: [0, 3, 4]
},
{
  id: 35,
  question: "What elements are recorded during an overall completion confirmation of a maintenance order?",
  options: ["Time entry", "Measuring documents", "Availability check", "Materials", "Invoicing"],
  correctAnswers: [0, 1, 3]
},
{
  id: 36,
  question: "What tasks are performed for external reporting purposes?",
  options: [
    "Manage accounts receivable",
    "Calculate production variances",
    "Create a profit and loss statement",
    "Create cost center plan/actual statements"
  ],
  correctAnswers: [2, 3]
},
{
  id: 37,
  question: "What business partner role connects the supplier with your company code balance sheet?",
  options: ["FI Vendor", "Business Partner General", "FI Customer", "Supplier"],
  correctAnswers: [0]
},
{
  id: 38,
  question: "What is the timeframe of SAP SuccessFactors release cycles?",
  options: ["Bi-annually", "Monthly", "Annually", "Quarterly"],
  correctAnswers: [0]
},
{
  id: 39,
  question: "To what object can you settle an internal order?",
  options: ["Statistical key figure", "Equipment", "Profit center", "Fixed asset"],
  correctAnswers: [2]
},
{
  id: 40,
  question: "When running MRP, what setting determines if a material is procured or produced?",
  options: ["Procurement type", "Purchasing group", "MRP type", "Processing key"],
  correctAnswers: [0]
},
{
  id: 41,
  question: "What transactions credit a production order?",
  options: ["Goods receipt", "Material withdrawal", "Confirmation", "Order settlement"],
  correctAnswers: [0, 3]
},
{
  id: 42,
  question: "Which organizational units are created for Financial Accounting in SAP S/4HANA?",
  options: ["Operating concern", "Controlling area", "Segment", "Company code"],
  correctAnswers: [1, 3]
},
{
  id: 43,
  question: "Which production order steps can be executed via background processing?",
  options: ["Order release", "Order settlement", "WIP determination", "Order confirmation", "Order creation"],
  correctAnswers: [0, 1, 2]
},
{
  id: 44,
  question: "Which controlling object is always statistical?",
  options: ["Internal order", "Profitability segment", "Cost center", "Profit center"],
  correctAnswers: [1]
},
{
  id: 45,
  question: "When creating condition master records, what does the condition type control?",
  options: ["Scales", "Validity period", "Currency", "Sales organization"],
  correctAnswers: [0, 1]
},
{
  id: 46,
  question: "Which application shows stock, requirements, and receipts for a material?",
  options: ["MRP Live", "MRP List", "Stock overview", "Stock requirements list"],
  correctAnswers: [3]
},
{
  id: 47,
  question: "Which master records are directly assigned to a company code?",
  options: ["Material", "Cost center", "Activity type", "Fixed asset"],
  correctAnswers: [1, 3]
},
{
  id: 48,
  question: "When creating a warehouse number, which organizational elements must be assigned?",
  options: ["Shipping point", "Company code", "Plant", "Storage location"],
  correctAnswers: [2, 3]
},
{
  id: 49,
  question: "In a warehouse, what represents the physical location where goods are stored?",
  options: ["Pallet", "Storage location", "Storage section", "Storage bin"],
  correctAnswers: [3]
},
{
  id: 50,
  question: "What objects are used to create a Purchasing Info Record?",
  options: ["Company code", "Purchasing organization", "Material master", "Vendor", "Purchasing group"],
  correctAnswers: [1, 2, 3]
},
{
  id: 51,
  question: "Which objects can you settle?",
  options: ["WBS element", "Maintenance order", "Profitability segment", "Cost center"],
  correctAnswers: [0, 1, 3]
},
{
  id: 52,
  question: "Which of the following is the hierarchical model of a project?",
  options: ["Task list", "Work breakdown structure", "Network", "Activity"],
  correctAnswers: [2]
},
{
  id: 53,
  question: "Which processes occur automatically when posting an order confirmation?",
  options: ["Variance calculation", "Order settlement", "Goods issue", "Goods receipt", "Post actual costs"],
  correctAnswers: [1, 2, 3]
},
{
  id: 54,
  question: "Which characteristics must company codes share in a controlling area?",
  options: ["Posting period variant", "Fiscal year variant", "Operating chart of accounts", "Group currency"],
  correctAnswers: [1, 2]
},
{
  id: 55,
  question: "What are the suite qualities of the SAP Intelligent Enterprise?",
  options: [
    "One workflow inbox",
    "End-to-end process blueprints",
    "Embedded analytics per product",
    "Seamless user experience",
    "Code-based applications"
  ],
  correctAnswers: [1, 2, 3]
},
{
  id: 56,
  question: "Which business processes create a Financial Accounting document?",
  options: [
    "Transfer stock within storage location",
    "Post goods issue to production order",
    "Execute depreciation run",
    "Create sales order",
    "Transfer stock to another company code"
  ],
  correctAnswers: [1, 2, 4]
},
{
  id: 57,
  question: "What demand elements are evaluated during an MRP run?",
  options: ["Sales orders", "Planned orders", "Scheduled lines", "Purchase requisitions"],
  correctAnswers: [0]
},
{
  id: 58,
  question: "What happens when you post a goods issue in a delivery document?",
  options: [
    "EWM outbound delivery order is created",
    "Billing due list is updated",
    "Invoice is created",
    "Material ledger document is created",
    "Inventory quantities are updated"
  ],
  correctAnswers: [0, 1, 4]
},
{
  id: 59,
  question: "What function commits funds assigned to the budget of a WBS element?",
  options: ["Availability control", "Cost center accounting", "Settlement processing", "Profitability analysis"],
  correctAnswers: [0]
},
{
  id: 60,
  question: "Which controlling objects can be settled by a settlement rule?",
  options: ["Production order", "Maintenance order", "WBS element", "Sales order", "Profit center"],
  correctAnswers: [0, 1, 2]
},
{
  id: 61,
  question: "When is backorder processing considered?",
  options: [
    "When goods issue is performed",
    "When order quantity is not fully confirmed",
    "When planning transportation",
    "When ATP is unavailable"
  ],
  correctAnswers: [1]
},
{
  id: 62,
  question: "Which BOP strategy releases confirmed stock to prioritize future needs?",
  options: ["Lose", "Gain", "Win", "Fill"],
  correctAnswers: [2]
},
{
  id: 63,
  question: "Why would you enter working hours using CATS?",
  options: ["Record overtime", "Request absence", "Confirm activities", "Maintain absence", "Plan time"],
  correctAnswers: [0, 2, 4]
},
{
  id: 64,
  question: "Which objects can be assigned to a profit center?",
  options: ["Sales order item", "Purchase order item", "Sales organization", "Material"],
  correctAnswers: [0, 3]
},
{
  id: 65,
  question: "What is the result of converting a planned order?",
  options: [
    "Planned independent requirement",
    "Purchase requisition",
    "Purchase order",
    "Production order"
  ],
  correctAnswers: [1, 3]
},
{
  id: 66,
  question: "What is a typical sequence of corrective maintenance?",
  options: [
    "Create task list → notification → schedule → release → confirm",
    "Create notification → plan → execute → complete → confirm",
    "Create notification → plan → release → confirm → complete",
    "Create task list → notification → schedule → confirm → complete"
  ],
  correctAnswers: [2]
},
{
  id: 67,
  question: "Which HR organizational element is assigned directly to a company code?",
  options: ["Personnel area", "Position", "Infotype", "Organizational unit"],
  correctAnswers: [0]
},
{
  id: 68,
  question: "What does a posting key control?",
  options: [
    "Debit/credit posting",
    "Posting without tax",
    "Number range",
    "Account type"
  ],
  correctAnswers: [0, 3]
},
{
  id: 69,
  question: "Which are business partner categories in SAP S/4HANA?",
  options: ["Individual", "Group", "Person", "Corporation", "Organization"],
  correctAnswers: [1, 2, 4]
},
{
  id: 70,
  question: "Which selection modes exist for running MRP?",
  options: ["MRP Live", "Predictive MRP", "Classical MRP", "Regenerative MRP", "Backorder Processing"],
  correctAnswers: [0, 2, 3]
},
{
  id: 71,
  question: "What information is maintained for a G/L account at company code level?",
  options: ["Account group", "Account type", "Account number", "Account currency"],
  correctAnswers: [3]
},
{
  id: 72,
  question: "What is an advantage of using stock transport orders?",
  options: [
    "Ownership transfer delayed until GR",
    "One-step goods movement",
    "MRP converts POs to STOs",
    "Goods issue and receipt tracked via PO history"
  ],
  correctAnswers: [0]
},
{
  id: 73,
  question: "What technologies supercharge the human experience with X and O data?",
  options: ["Machine learning", "Internet of Things", "Blockchain", "Conversational AI"],
  correctAnswers: [0, 1]
},
{
  id: 74,
  question: "What occurs when a maintenance order is technically completed?",
  options: [
    "Time entry is posted",
    "Incoming invoices allowed",
    "Open purchase requisitions deleted",
    "Reserved materials released",
    "Settlement rule executed"
  ],
  correctAnswers: [1, 2, 3]
},
{
  id: 75,
  question: "What master data in an activity type is used to post an activity allocation?",
  options: ["Cost element", "Internal order", "WBS element", "Statistical key figure"],
  correctAnswers: [0]
},
{
  id: 76,
  question: "In make-to-order, to which order is goods issue posted?",
  options: ["Outbound delivery", "Production order", "Stock transport order", "Sales order"],
  correctAnswers: [1]
},
{
  id: 77,
  question: "What data must be linked to a cost center to derive segment accounting?",
  options: ["Profit center", "Cost center category", "G/L account", "Controlling area"],
  correctAnswers: [0]
},
{
  id: 78,
  question: "Which SAP Fiori app types use SAP HANA capabilities directly?",
  options: ["Analytical", "Transactional", "SAP GUI for HTML", "Fact sheet"],
  correctAnswers: [0, 3]
},
{
  id: 79,
  question: "What occurs when planning an internal project activity?",
  options: ["Costs recorded", "Service performed", "Purchase requisition generated", "Resources committed"],
  correctAnswers: [3]
},
{
  id: 80,
  question: "What document creates a commitment for an internal order?",
  options: ["Maintenance order", "Production order", "Goods receipt", "Purchase order"],
  correctAnswers: [3]
},
{
  id: 81,
  question: "What maintenance order elements are included in an operation?",
  options: ["Object list", "Settlement rule", "Work center", "Standard time", "Activity type"],
  correctAnswers: [0, 2, 3]
},
{
  id: 82,
  question: "Which end-to-end business processes are included with SAP S/4HANA?",
  options: ["Order to cash", "Request to service", "Source to pay", "Design to build", "Record to report"],
  correctAnswers: [0, 2, 4]
},
{
  id: 83,
  question: "What master data calculates quantity structure in product cost planning?",
  options: ["Routing", "Work center", "Cost center", "Bill of material"],
  correctAnswers: [0, 3]
},
{
  id: 84,
  question: "At which steps in order-to-cash are G/L postings made?",
  options: [
    "Create sales order",
    "Post goods issue",
    "Save invoice",
    "Create outbound delivery"
  ],
  correctAnswers: [1, 2]
},
{
  id: 85,
  question: "A goods issue against a production order results in:",
  options: [
    "Warehouse task created",
    "Material reservation reduced",
    "Internal labor costs posted",
    "Material ledger document created",
    "Actual costs updated"
  ],
  correctAnswers: [1, 3, 4]
},
{
  id: 86,
  question: "To which areas can CATS data be transferred?",
  options: [
    "Management Accounting",
    "Human Capital Management",
    "Project System",
    "Financial Accounting",
    "Production Planning"
  ],
  correctAnswers: [0, 1, 2]
},
{
  id: 87,
  question: "In which step of purchase-to-pay is a purchase requisition generated?",
  options: [
    "Determination of requirements",
    "Source of supply determination",
    "Vendor selection",
    "Invoice verification"
  ],
  correctAnswers: [0]
},
{
  id: 88,
  question: "In a project, what is linked via relationships?",
  options: ["WBS elements", "Networks", "Activities", "Project definitions"],
  correctAnswers: [1]
},
{
  id: 90,
  question: "How do you view all records created for an employee?",
  options: [
    "Basic personal data",
    "Personnel action",
    "Organizational assignment",
    "Personnel file"
  ],
  correctAnswers: [3]
},
{
  id: 91,
  question: "How can you post external labor costs to a network activity?",
  options: [
    "Activity allocation",
    "Service entry sheet",
    "Settlement",
    "Confirmation"
  ],
  correctAnswers: [1]
},
{
  id: 92,
  question: "What procedures can be used for cross-plant stock transfer?",
  options: [
    "Stock transport order without delivery",
    "Slotting and rearrangement",
    "Two-step procedure",
    "One-step procedure",
    "MRP"
  ],
  correctAnswers: [0, 2, 3]
},
{
  id: 93,
  question: "What activities can a manager complete using Manager Self-Service?",
  options: ["Control costs", "Enroll in benefits", "Enter timesheet", "Manage budget"],
  correctAnswers: [1, 2]
},
{
  id: 94,
  question: "What planning tool prioritizes sales forecasting and inventory buffers?",
  options: [
    "MRP simulation",
    "Demand-driven MRP",
    "PP/DS",
    "Backorder processing"
  ],
  correctAnswers: [1]
},
{
  id: 95,
  question: "For which line item must a transaction type be entered?",
  options: ["Tax account", "Material account", "Customer account", "Asset account"],
  correctAnswers: [3]
},
  {
    id: 96,
    question: "How do you use the result of a released standard cost estimate?",
    options: [
      "Determine material sales price",
      "Calculate activity type price",
      "Determine base costs for overhead",
      "Calculate plan costs in production order",
      "Update standard price in material master"
    ],
    correctAnswers: [1, 3, 4]
  },
  {
    id: 97,
    question: "What must you do in a purchase order to purchase a material for a cost center?",
    options: [
      "Enter purchase order item category",
      "Enter account assignment category",
      "Change account to cost element",
      "Change material type"
    ],
    correctAnswers: [1]
  },
  {
    id: 98,
    question: "Where do you maintain primary and secondary cost elements?",
    options: [
      "Cost Element Accounting",
      "Profit Center Accounting",
      "General Ledger Accounting",
      "Cost Center Accounting"
    ],
    correctAnswers: [2]
  },

  /* … QUESTIONS CONTINUE IN SAME PATTERN … */

  {
    id: 98,
    question: "Where do you maintain primary and secondary cost elements?",
    options: [
      "Cost Element Accounting",
      "Profit Center Accounting",
      "General Ledger Accounting",
      "Cost Center Accounting"
    ],
    correctAnswers: [2]
  },
  {
    id: 99,
    question: "Question 99",
    options: ["Answer 135"],
    correctAnswers: [0]
  },
  {
    id: 100,
    question: "Which document is created when you post a valuated goods receipt for consumable materials?",
    options: [
      "Delivery note",
      "Controlling document",
      "Vendor invoice document",
      "Purchase order"
    ],
    correctAnswers: [1]
  }
];



