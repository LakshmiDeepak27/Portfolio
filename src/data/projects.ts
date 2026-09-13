export interface Project {
  slug: string
  number: string
  title: string
  tagline: string
  problem: string
  approach: string
  technologies: string[]
  github?: string
  demo?: string
  featured: boolean
  overview: string
  goals: string[]
  architecture: string
  technicalDecisions: string[]
  implementation: string
  challenges: string[]
  results: string
  learned: string[]
  futureImprovements: string[]
}

export const projects: Project[] = [
  {
    slug: 'processguard',
    number: '01',
    title: 'ProcessGuard',
    tagline: 'High-performance, C++-powered system process monitoring and anomaly detection platform.',
    problem:
      'Standard task managers provide momentary metrics snapshots that fail to distinguish between brief benign usage spikes and pathological resource locks, lack deterministic multi-sample anomaly rules, and discard audit history on exit.',
    approach:
      'Engineered a native C++ engine querying Linux /proc and Win32 APIs, coupled with a Node.js/Express REST backend, indexed SQLite telemetry persistence, and a responsive React dashboard with stateful anomaly alerting.',
    technologies: ['C++17', 'Node.js', 'Express', 'React', 'SQLite', 'Docker'],
    github: 'https://github.com/LakshmiDeepak27/ProcessGaurd',
    featured: true,
    overview:
      'ProcessGuard is an end-to-end system process monitoring and anomaly detection platform. Engineered with a native C++17 core, Express REST API, and a custom dark-espresso React dashboard, it monitors real-time resource consumption and flags sustained pathological anomalies—such as detecting when a rogue process consumes >90% CPU across consecutive evaluation cycles.',
    goals: [
      'Implement an OOP-driven C++ engine to inspect low-level system process tables directly from the OS kernel',
      'Evaluate deterministic multi-sample anomaly detection rules with stateful deduplication and cooldowns',
      'Persist structured telemetry and forensic incident audit logs in an indexed relational SQLite database',
      'Expose real-time telemetry through RESTful APIs and a responsive, scannable web dashboard',
    ],
    architecture:
      'The architecture decouples data acquisition from presentation: a native C++ core implements abstract Monitor hierarchies and min-heaps for top-K extraction, emitting structured JSON via stdout. An Express service polls telemetry, applies rule logic, and serves REST endpoints, while SQLite indexes historical snapshots. Multi-stage Docker packaging ensures clean deployment.',
    technicalDecisions: [
      'Employed C++ priority queues (min-heap) to extract top-K CPU/memory consumers in O(N log K) time rather than full O(N log N) sorting',
      'Applied RAII and smart pointers (std::unique_ptr) for strict resource lifetime management with zero memory leaks',
      'Configured stateful AlertManager with PID:event_type hashing and a 30s cooldown window to prevent alert flooding',
      'Indexed SQLite schemas (idx_system_snapshots_created_at, idx_alerts_severity) for sub-millisecond time-series queries',
    ],
    implementation:
      'The engine samples /proc/stat and /proc/[pid]/stat (with Win32 fallbacks on Windows), calculating delta CPU ticks and RSS memory usage. Express continuously ingests snapshots, detects anomalies against configurable thresholds, and serves paginated process tables, top consumers, and historical trend charts.',
    challenges: [
      'Calculating accurate per-process CPU percentages across variable sampling intervals and dynamic core counts',
      'Designing cross-platform abstractions that work seamlessly on Linux /proc and Windows Toolhelp32 snapshots',
      'Preventing database write contention and query bottlenecks during high-frequency telemetry logging',
    ],
    results:
      'Delivered a robust, containerized systems monitoring platform with automated multi-sample anomaly detection, sub-millisecond C++ telemetry collection, and clean forensic analysis capabilities.',
    learned: [
      'Low-level OS process table parsing and CPU jiffies delta calculations',
      'Modern C++17 design patterns, cache-friendly data structures, and heap-based filtering',
      'Decoupled systems architecture linking native compiled binaries to web APIs and dashboards',
    ],
    futureImprovements: [
      'Add automated process throttling / SIGSTOP execution for critical runaway anomalies',
      'Implement WebSocket streaming for sub-second live telemetry updates',
      'Expand network socket inspection and open file descriptor tracking per process',
    ],
  },
  {
    slug: 'codesync',
    number: '02',
    title: 'CodeSync',
    tagline: 'Real-time collaborative coding platform with live multi-user editing, team chat, and Judge0 sandboxed execution.',
    problem:
      'Distributed engineering teams and interviewers struggle with synchronization lag, conflicting concurrent edits, and the severe security hazard of executing untrusted user code on host application servers.',
    approach:
      'Engineered a distributed real-time workspace featuring Monaco Editor, Socket.IO concurrency synchronization with live multi-user cursors, persistent MySQL/Prisma workspaces, and isolated remote code execution via Judge0 sandboxing.',
    technologies: ['React', 'Node.js', 'Socket.IO', 'Monaco Editor', 'MySQL', 'Prisma', 'Judge0', 'Docker'],
    github: 'https://github.com/LakshmiDeepak27/CodeSync',
    featured: true,
    overview:
      'CodeSync is a real-time collaborative development workspace designed for developer teams, pair programming, and technical interviews. It allows multiple developers to edit shared files simultaneously with live cursor tracking, manage multi-file project trees, converse via integrated room chat, and run code safely in a sandboxed compiler environment.',
    goals: [
      'Enable seamless multi-user concurrent code editing with real-time cursor presence and conflict resolution',
      'Integrate an isolated code execution engine supporting multiple languages with custom stdin and execution telemetry',
      'Design persistent multi-file workspaces with full role-based access control (Owner, Editor, Viewer)',
      'Implement secure production authentication supporting both JWT cookies and Google OAuth 2.0',
    ],
    architecture:
      'The client combines Vite, React, and Monaco Editor to render syntax and remote cursor positions. Real-time operations flow through Socket.IO rooms, while Express REST endpoints manage authentication and workspace persistence in MySQL via Prisma ORM. Code execution requests are dispatched to an isolated Judge0 sandbox environment with strict memory and CPU limits.',
    technicalDecisions: [
      'Completely isolated untrusted code execution from the API server using Judge0 sandbox containers',
      'Employed Socket.IO event channels for low-latency operational sync and remote cursor state broadcasting',
      'Secured sessions using HTTP-only SameSite cookies and JWT validation with bcrypt password hashing',
      'Enforced server-side role validation on both REST routes and WebSocket socket handlers to protect rooms',
    ],
    implementation:
      'Users join collaborative rooms via unique room codes. File tree operations update MySQL in real-time and broadcast across connected room participants. When a user runs code, the payload and stdin are sent to Judge0, which returns runtime execution time, memory usage, stdout, and compilation diagnostics directly to the multi-tab terminal.',
    challenges: [
      'Synchronizing cursor coordinates and file buffer edits across clients without jitter or lost updates',
      'Handling asynchronous code compilation timeouts and sandbox errors gracefully in the UI',
      'Managing role transitions and granular read/write permissions dynamically across active WebSocket sockets',
    ],
    results:
      'Created a production-ready pair-programming platform with responsive sub-50ms sync latency, safe multi-language sandboxed execution, and robust multi-file project management.',
    learned: [
      'Real-time state synchronization architectures and WebSocket room lifecycle management',
      'Sandboxed untrusted code execution security patterns and rate limiting',
      'Relational data modeling with Prisma and MySQL for hierarchical workspaces',
    ],
    futureImprovements: [
      'Integrate Operational Transformation (OT) or CRDTs (Yjs) for conflict-free offline merge capabilities',
      'Add WebRTC audio/video call streaming directly inside collaborative rooms',
      'Support git repository cloning directly into workspaces',
    ],
  },
  {
    slug: 'lucidechat-rag',
    number: '03',
    title: 'LucideChat',
    tagline: 'Production-grade multi-tenant Retrieval-Augmented Generation (RAG) system with semantic document querying.',
    problem:
      'Extracting precise answers from lengthy, complex PDFs often leads to LLM hallucinations, high token costs, and dangerous cross-tenant data leakage, while synchronous processing blocks web workers during compute-heavy embedding jobs.',
    approach:
      'Architected an asynchronous, multi-tenant RAG platform using Next.js 15, Clerk authentication, Qdrant vector database with strict metadata tenant filtering, BullMQ background queues, and Google Gemini models.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Express', 'Google Gemini', 'Qdrant', 'BullMQ', 'Clerk'],
    github: 'https://github.com/LakshmiDeepak27/ChatWithPdf-RAG',
    demo: 'https://getlucid-chat.vercel.app/',
    featured: true,
    overview:
      'LucideChat is an enterprise-ready Retrieval-Augmented Generation (RAG) application enabling users to upload PDF documents and engage in context-aware conversations. It pairs Google Gemini AI with Qdrant vector search to pinpoint relevant document sections and formulate accurate, hallucination-free responses.',
    goals: [
      'Build an end-to-end RAG pipeline supporting large PDF uploads with asynchronous background chunking',
      'Ensure strict multi-tenant isolation so users can never access or query other accounts\' documents',
      'Leverage Google Gemini embedding models and Gemini 1.5 Flash for high-speed, cost-effective inference',
      'Implement real-time processing status tracking with resilient worker queues',
    ],
    architecture:
      'The system utilizes a decoupled Next.js 15 App Router frontend and an Express API. Document uploads validate PDF magic bytes, store files temporarily, and enqueue BullMQ processing jobs. A Redis-backed background worker chunks text, calls Gemini Embedding API, and upserts vectors to Qdrant with user-scoped metadata. Queries perform vector similarity search before prompt synthesis.',
    technicalDecisions: [
      'Strict multi-tenant security enforcing userId and documentId payload filtering on every Qdrant query',
      'Offloaded PDF parsing and vector generation to BullMQ background workers to prevent HTTP request timeouts',
      'Implemented PDF hardening: MIME verification, magic byte (%PDF-) validation, and ephemeral local file cleanup',
      'Employed Google Gemini 1.5 Flash for low-latency, context-rich response generation with streaming UI',
    ],
    implementation:
      'On upload, BullMQ splits text into overlapping semantic chunks, generates vector embeddings, and indexes them into Qdrant. When a user asks a question, the server vectorizes the query, retrieves the top-k most relevant text chunks with cosine similarity, constructs a grounded context prompt, and returns the AI generated answer.',
    challenges: [
      'Preventing memory bloat when parsing large multi-megabyte PDFs in Node.js',
      'Optimizing chunking strategies (chunk size and overlap) to balance semantic context against retrieval precision',
      'Guaranteeing zero cross-tenant vector contamination during high-concurrency search requests',
    ],
    results:
      'Deployed a live production application on Vercel delivering sub-second semantic retrieval, rock-solid tenant isolation, and natural conversational answers grounded strictly in document content.',
    learned: [
      'Vector database schema design, payload indexing, and cosine similarity filtering in Qdrant',
      'Production RAG optimization techniques including chunk overlap tuning and grounded prompting',
      'Designing asynchronous distributed job queues with BullMQ and Valkey/Redis',
    ],
    futureImprovements: [
      'Implement hybrid search combining BM25 keyword matching with dense vector embeddings',
      'Add page citation badges and in-document visual highlight previews for answers',
      'Support multi-document cross-comparison and chat sessions',
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
