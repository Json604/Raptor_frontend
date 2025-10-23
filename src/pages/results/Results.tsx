import { useEffect, useState } from "react";
import './Results.css';
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Download, AlertTriangle, Shield, Info } from 'lucide-react';

export default function Results() {
    const [data, setData] = useState<any>(null);
    const [activeTab, setActiveTab] = useState<'vibe' | 'indepth'>('vibe');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation()
    const {githubUrl, webUrl} = location.state || {}
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    
    // Sample data for development
//     useEffect(() => {
//     setData({
//   "success": true,
//   "message": "Web application scanned successfully",
//   "data": {
//     "report": {
//       "score": 71,
//       "grade": "C",
//       "url": "https://raptor.support",
//       "summary": {
//         "total": 7,
//         "critical": 0,
//         "high": 1,
//         "medium": 2,
//         "low": 4
//       },
//       "message": "Good start, but there are some security issues to fix. Let's make your app safer!",
//       "findings": [
//         {
//           "category": "Security Headers",
//           "severity": "high",
//           "title": "Content-Security-Policy",
//           "description": "Missing CSP header",
//           "plainEnglish": "Your website is missing a security setting (Content-Security-Policy) that protects against attacks. Think of it like forgetting to lock a door.",
//           "risk": "XSS and data injection attacks possible",
//           "fix": "Add CSP header with appropriate directives for your app"
//         },
//         {
//           "category": "Security Headers",
//           "severity": "medium",
//           "title": "X-Frame-Options",
//           "description": "Missing X-Frame-Options header",
//           "plainEnglish": "Your website is missing a security setting (X-Frame-Options) that protects against attacks. Think of it like forgetting to lock a door.",
//           "risk": "Vulnerable to clickjacking attacks",
//           "fix": "Add header: X-Frame-Options: DENY or SAMEORIGIN"
//         },
//         {
//           "category": "Security Headers",
//           "severity": "medium",
//           "title": "X-Content-Type-Options",
//           "description": "Missing X-Content-Type-Options header",
//           "plainEnglish": "Your website is missing a security setting (X-Content-Type-Options) that protects against attacks. Think of it like forgetting to lock a door.",
//           "risk": "MIME type sniffing vulnerabilities",
//           "fix": "Add header: X-Content-Type-Options: nosniff"
//         },
//         {
//           "category": "Security Headers",
//           "severity": "low",
//           "title": "X-XSS-Protection",
//           "description": "Missing X-XSS-Protection header",
//           "plainEnglish": "Your website is missing a security setting (X-XSS-Protection) that protects against attacks. Think of it like forgetting to lock a door.",
//           "risk": "Legacy XSS protection not enabled",
//           "fix": "Add header: X-XSS-Protection: 1; mode=block"
//         },
//         {
//           "category": "Security Headers",
//           "severity": "low",
//           "title": "Referrer-Policy",
//           "description": "Missing Referrer-Policy header",
//           "plainEnglish": "Your website is missing a security setting (Referrer-Policy) that protects against attacks. Think of it like forgetting to lock a door.",
//           "risk": "May leak sensitive information in referrer",
//           "fix": "Add header: Referrer-Policy: strict-origin-when-cross-origin"
//         },
//         {
//           "category": "Security Headers",
//           "severity": "low",
//           "title": "Permissions-Policy",
//           "description": "Missing Permissions-Policy header",
//           "plainEnglish": "Your website is missing a security setting (Permissions-Policy) that protects against attacks. Think of it like forgetting to lock a door.",
//           "risk": "Browser features not restricted",
//           "fix": "Add header: Permissions-Policy: geolocation=(), microphone=(), camera=()"
//         },
//         {
//           "category": "Security Headers",
//           "severity": "low",
//           "title": "Server Header Exposed",
//           "description": "Server header reveals: Netlify",
//           "plainEnglish": "Your website is missing a security setting (Server Header Exposed) that protects against attacks. Think of it like forgetting to lock a door.",
//           "risk": "Attackers can identify server software and target specific vulnerabilities",
//           "fix": "Remove or obscure the Server header"
//         }
//       ],
//       "scannedAt": "2025-10-23T20:25:33.320Z",
//       "scanDuration": "0.34",
//       "raw": {
//         "url": "https://raptor.support",
//         "timestamp": "2025-10-23T20:25:33.320Z",
//         "headers": {
//           "accept-ranges": "bytes",
//           "age": "21614",
//           "cache-control": "public,max-age=0,must-revalidate",
//           "cache-status": "\"Netlify Edge\"; hit",
//           "content-length": "891",
//           "content-type": "text/html; charset=UTF-8",
//           "date": "Thu, 23 Oct 2025 20:25:33 GMT",
//           "etag": "\"20d836e73e1859a3dc06450252b22c0b-ssl-df\"",
//           "server": "Netlify",
//           "strict-transport-security": "max-age=31536000",
//           "vary": "Accept-Encoding",
//           "x-nf-request-id": "01K89BZ1YZS9XFA2E00Q6QYKSW"
//         },
//         "securityHeaders": [
//           {
//             "type": "missing_header",
//             "severity": "medium",
//             "name": "X-Frame-Options",
//             "description": "Missing X-Frame-Options header",
//             "risk": "Vulnerable to clickjacking attacks",
//             "recommendation": "Add header: X-Frame-Options: DENY or SAMEORIGIN"
//           },
//           {
//             "type": "missing_header",
//             "severity": "medium",
//             "name": "X-Content-Type-Options",
//             "description": "Missing X-Content-Type-Options header",
//             "risk": "MIME type sniffing vulnerabilities",
//             "recommendation": "Add header: X-Content-Type-Options: nosniff"
//           },
//           {
//             "type": "missing_header",
//             "severity": "high",
//             "name": "Content-Security-Policy",
//             "description": "Missing CSP header",
//             "risk": "XSS and data injection attacks possible",
//             "recommendation": "Add CSP header with appropriate directives for your app"
//           },
//           {
//             "type": "missing_header",
//             "severity": "low",
//             "name": "X-XSS-Protection",
//             "description": "Missing X-XSS-Protection header",
//             "risk": "Legacy XSS protection not enabled",
//             "recommendation": "Add header: X-XSS-Protection: 1; mode=block"
//           },
//           {
//             "type": "missing_header",
//             "severity": "low",
//             "name": "Referrer-Policy",
//             "description": "Missing Referrer-Policy header",
//             "risk": "May leak sensitive information in referrer",
//             "recommendation": "Add header: Referrer-Policy: strict-origin-when-cross-origin"
//           },
//           {
//             "type": "missing_header",
//             "severity": "low",
//             "name": "Permissions-Policy",
//             "description": "Missing Permissions-Policy header",
//             "risk": "Browser features not restricted",
//             "recommendation": "Add header: Permissions-Policy: geolocation=(), microphone=(), camera=()"
//           },
//           {
//             "type": "information_disclosure",
//             "severity": "low",
//             "name": "Server Header Exposed",
//             "description": "Server header reveals: Netlify",
//             "risk": "Attackers can identify server software and target specific vulnerabilities",
//             "recommendation": "Remove or obscure the Server header"
//           }
//         ],
//         "cors": [],
//         "ssl": [],
//         "cookies": [],
//         "misconfiguration": [],
//         "summary": {
//           "critical": 0,
//           "high": 1,
//           "medium": 2,
//           "low": 4
//         },
//         "statusCode": 200
//       }
//     },
//     "aiReport": {
//       "inDepth": {
//         "summary": "The security scan for raptor.support identified several missing security headers and an exposed server header. The most significant finding is the missing Content-Security-Policy (CSP) header, which leaves the application vulnerable to Cross-Site Scripting (XSS) and data injection attacks. The absence of X-Frame-Options makes the site susceptible to clickjacking. The lack of X-Content-Type-Options opens the door to MIME sniffing vulnerabilities. Additionally, the report indicates that the legacy X-XSS-Protection is not enabled. The Referrer-Policy and Permissions-Policy headers are also missing, potentially leading to information leakage and unrestricted browser feature usage, respectively. Finally, the exposure of the 'Server' header, which reveals 'Netlify', allows attackers to identify the underlying server software and target known vulnerabilities specific to that platform.",
//         "fixes": [
//           {
//             "issue": "Missing X-Frame-Options header",
//             "recommendation": "Add the following header to the server configuration: `X-Frame-Options: DENY` or `X-Frame-Options: SAMEORIGIN`. `DENY` prevents the page from being framed at all, while `SAMEORIGIN` allows framing only by pages from the same origin. Choose the option that best fits the application's requirements."
//           },
//           {
//             "issue": "Missing X-Content-Type-Options header",
//             "recommendation": "Add the following header to the server configuration: `X-Content-Type-Options: nosniff`. This prevents the browser from MIME-sniffing the content type, mitigating potential security vulnerabilities."
//           },
//           {
//             "issue": "Missing Content-Security-Policy (CSP) header",
//             "recommendation": "Implement a Content-Security-Policy header. This is a complex header and should be tailored to the specific application requirements. A basic example is: `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self';` Carefully review and adjust the `default-src` and other directives to restrict the sources from which the application can load resources."
//           },
//           {
//             "issue": "Missing X-XSS-Protection header",
//             "recommendation": "Add the following header to the server configuration: `X-XSS-Protection: 1; mode=block`. This enables the browser's built-in XSS protection and instructs it to block the page if an XSS attack is detected."
//           },
//           {
//             "issue": "Missing Referrer-Policy header",
//             "recommendation": "Add the following header to the server configuration: `Referrer-Policy: strict-origin-when-cross-origin`. This will send the full URL as the referrer when navigating within the same origin, but only the origin when navigating to a different origin, reducing the risk of leaking sensitive information."
//           },
//           {
//             "issue": "Missing Permissions-Policy header",
//             "recommendation": "Add a Permissions-Policy header to restrict access to browser features. For example, to disable geolocation, microphone, and camera features, use: `Permissions-Policy: geolocation=(), microphone=(), camera=()`. Adjust the policy according to the application's needs and required permissions."
//           },
//           {
//             "issue": "Server Header Exposed",
//             "recommendation": "Configure the web server (Netlify in this case) to remove or obscure the 'Server' header. While the specific configuration varies depending on the server, most servers have options to customize the 'Server' header value or suppress it entirely. Consult the Netlify documentation for guidance on modifying or removing server headers."
//           }
//         ]
//       },
//       "vibe": {
//         "summary": "Okay, so the scan found some security holes on your website. Think of it like leaving the doors and windows unlocked on your house. The biggest risk is someone could inject malicious code into your site (XSS), which would let them steal user data or mess with your content. There are also smaller issues, like your website revealing it's running on Netlify, which could help bad guys target it with attacks. It's best to fix these, even the smaller ones, to keep everything safe and sound.",
//         "fixes": [
//           {
//             "issue": "Missing X-Frame-Options header",
//             "stepByStep": [
//               "Step 1: Access your Netlify project's 'netlify.toml' file.",
//               "Step 2: Add the following to the [http_headers] section:\n[[headers]]\n for = \"/*\"\n [headers.values]\n X-Frame-Options = \"DENY\""
//             ],
//             "necessary": "Yes — Prevents your site from being embedded in malicious iframes (clickjacking)."
//           },
//           {
//             "issue": "Missing X-Content-Type-Options header",
//             "stepByStep": [
//               "Step 1: Access your Netlify project's 'netlify.toml' file.",
//               "Step 2: Add the following to the [http_headers] section (or append to the existing one):\n[[headers]]\n for = \"/*\"\n [headers.values]\n X-Content-Type-Options = \"nosniff\""
//             ],
//             "necessary": "Yes — Prevents browsers from incorrectly interpreting file types, reducing the risk of XSS attacks."
//           },
//           {
//             "issue": "Missing Content-Security-Policy header",
//             "stepByStep": [
//               "Step 1: Access your Netlify project's 'netlify.toml' file.",
//               "Step 2: **Carefully** define your CSP directives (this is complex, research best practices for your app). Start with a restrictive policy and loosen as needed.",
//               "Step 3: Add to the [http_headers] section:\n[[headers]]\n for = \"/*\"\n [headers.values]\n Content-Security-Policy = \"default-src 'self'\" (Example - replace with a secure policy applicable to your code)"
//             ],
//             "necessary": "Yes — Crucial for mitigating XSS attacks by controlling the sources from which the browser is allowed to load resources."
//           },
//           {
//             "issue": "Missing X-XSS-Protection header",
//             "stepByStep": [
//               "Step 1: Access your Netlify project's 'netlify.toml' file.",
//               "Step 2: Add the following to the [http_headers] section:\n[[headers]]\n for = \"/*\"\n [headers.values]\n X-XSS-Protection = \"1; mode=block\""
//             ],
//             "necessary": "Good to have — Adds a legacy layer of XSS protection, even though newer browsers rely on CSP. "
//           },
//           {
//             "issue": "Missing Referrer-Policy header",
//             "stepByStep": [
//               "Step 1: Access your Netlify project's 'netlify.toml' file.",
//               "Step 2: Add the following to the [http_headers] section:\n[[headers]]\n for = \"/*\"\n [headers.values]\n Referrer-Policy = \"strict-origin-when-cross-origin\""
//             ],
//             "necessary": "Useful — Controls how much information is sent in the Referer header, preventing potential information leaks."
//           },
//           {
//             "issue": "Missing Permissions-Policy header",
//             "stepByStep": [
//               "Step 1: Access your Netlify project's 'netlify.toml' file.",
//               "Step 2: Add the following to the [http_headers] section. Customize the policy based on your app's needs:\n[[headers]]\n for = \"/*\"\n [headers.values]\n Permissions-Policy = \"geolocation=(), microphone=(), camera=()\""
//             ],
//             "necessary": "Nice to have — Restricts access to browser features, improving security and privacy by disabling features you don't need."
//           },
//           {
//             "issue": "Server Header Exposed",
//             "stepByStep": [
//               "Step 1:  This typically requires configuration within the web server itself.  With Netlify, this often isn't directly configurable.",
//               "Step 2: Since this is on Netlify and you can't directly control it, you would need to use a proxy or CDN in front of Netlify to strip the header. This adds complexity.",
//               "Step 3: If you chose this route, configure your proxy (like Cloudflare) to remove or mask the Server header."
//             ],
//             "necessary": "Not critical —  Lower priority; hiding server information makes targeting attacks slightly harder, but isn't a core vulnerability."
//           }
//         ]
//       }
//     }
//   }
// })
//     }, []);

    useEffect(() => {
        const quickScanData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                
                let endpoint = ""
                let body = {}

                if(githubUrl && !webUrl){
                    endpoint = `${BASE_URL}/quick/github`
                    body = {url: githubUrl}
                }
                else if (!githubUrl && webUrl) {
                    endpoint = `${BASE_URL}/quick/web`;
                    body = {url: webUrl};
                } else if (githubUrl && webUrl) {
                    endpoint = `${BASE_URL}/quick/full`;
                    body = { githubUrl, webUrl};
                } else {
                    setError("No input provided. Please go back and enter a valid URL.");
                    return;
                }

                const res = await fetch(endpoint, {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body:JSON.stringify(body)
                });

                if (!res.ok) {
                    // Try to get the error message from the response
                    let errorMessage = `HTTP error! status: ${res.status}`;
                    try {
                        const errorJson = await res.json();
                        if (errorJson.error) {
                            errorMessage = errorJson.error;
                        } else if (errorJson.message) {
                            errorMessage = errorJson.message;
                        }
                    } catch (parseError) {
                        // If we can't parse the response, use the generic error
                        console.error("Could not parse error response:", parseError);
                    }
                    setError(errorMessage);
                    return;
                }

                const json = await res.json();
                
                if (json.success === false) {
                    setError(json.error || json.message || "Scan failed. Please try again.");
                    return;
                }
                
                setData(json);
            } catch (err) {
                console.error("Scan error:", err);
                if (err instanceof TypeError && err.message.includes('fetch')) {
                    setError("Network error: Unable to connect to the server. Please check your internet connection and try again.");
                } else {
                    setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
                }
            } finally {
                setIsLoading(false);
            }
        };

        quickScanData();
    }, []);

    const getSeverityColor = (severity: string) => {
        switch (severity.toLowerCase()) {
            case 'critical': return '#ff4444';
            case 'high': return '#ff6b35';
            case 'medium': return '#ffa726';
            case 'low': return '#ffeb3b';
            default: return '#9e9e9e';
        }
    };

    const getSeverityIcon = (severity: string) => {
        switch (severity.toLowerCase()) {
            case 'critical': return <AlertTriangle size={16} />;
            case 'high': return <AlertTriangle size={16} />;
            case 'medium': return <Shield size={16} />;
            case 'low': return <Info size={16} />;
            default: return <Info size={16} />;
        }
    };

    const exportResults = () => {
        if (!data?.data?.report?.raw) return;
        
        const blob = new Blob([JSON.stringify(data.data.report.raw, null, 2)], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `raptor-scan-results-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (error) {
        return (
            <>
                <Navbar />
                <div className="results-container">
                    <div className="error-message">
                        <h2>Scan Failed</h2>
                        <p>{error}</p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <button 
                                onClick={() => window.location.reload()} 
                                style={{
                                    background: '#00d4ff',
                                    color: 'black',
                                    border: 'none',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: '500'
                                }}
                            >
                                Try Again
                            </button>
                            <button 
                                onClick={() => window.history.back()} 
                                style={{
                                    background: 'transparent',
                                    color: '#00d4ff',
                                    border: '1px solid #00d4ff',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: '500'
                                }}
                            >
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if (isLoading || !data) {
        return (
            <>
                <Navbar />
                <div className="results-container">
                    {/* Skeleton Header */}
                    <div className="report-header skeleton">
                        <div className="header-content">
                            <div className="url-section">
                                <div className="skeleton-text skeleton-title"></div>
                                <div className="scan-info">
                                    <div className="skeleton-badge"></div>
                                    <div className="skeleton-badge"></div>
                                </div>
                            </div>
                            
                            <div className="score-section">
                                <div className="skeleton-score-circle"></div>
                                <div className="skeleton-grade"></div>
                            </div>
                        </div>
                        
                        <div className="message-section skeleton">
                            <div className="skeleton-text skeleton-message"></div>
                        </div>
                    </div>

                    {/* Skeleton Summary Chips */}
                    <div className="summary-section">
                        <div className="summary-chips">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="summary-chip skeleton">
                                    <div className="skeleton-chip-count"></div>
                                    <div className="skeleton-chip-label"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skeleton Findings Table */}
                    <div className="findings-section">
                        <div className="section-header">
                            <div className="skeleton-text skeleton-section-title"></div>
                            <div className="skeleton-export-btn"></div>
                        </div>
                        
                        <div className="table-container">
                            <div className="skeleton-table">
                                <div className="skeleton-table-header">
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <div key={i} className="skeleton-table-header-cell"></div>
                                    ))}
                                </div>
                                {[1, 2, 3, 4, 5].map((row) => (
                                    <div key={row} className="skeleton-table-row">
                                        {[1, 2, 3, 4, 5, 6].map((cell) => (
                                            <div key={cell} className="skeleton-table-cell">
                                                <div className="skeleton-text"></div>
                                                <div className="skeleton-text skeleton-text-small"></div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skeleton AI Report */}
                    <div className="ai-report-section">
                        <div className="section-header">
                            <div className="skeleton-text skeleton-section-title"></div>
                            <div className="tab-buttons">
                                <div className="skeleton-tab-btn"></div>
                                <div className="skeleton-tab-btn"></div>
                            </div>
                        </div>

                        <div className="ai-content">
                            <div className="vibe-summary skeleton">
                                <div className="skeleton-text skeleton-subtitle"></div>
                                <div className="skeleton-text skeleton-paragraph"></div>
                                <div className="skeleton-text skeleton-paragraph"></div>
                            </div>
                            
                            <div className="step-by-step-fixes">
                                <div className="skeleton-text skeleton-subtitle"></div>
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="fix-item skeleton">
                                        <div className="fix-header">
                                            <div className="skeleton-text skeleton-fix-title"></div>
                                            <div className="skeleton-badge"></div>
                                        </div>
                                        <div className="fix-steps">
                                            {[1, 2].map((step) => (
                                                <div key={step} className="step-item">
                                                    <div className="skeleton-step-number"></div>
                                                    <div className="skeleton-text skeleton-step-text"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const report = data.data.report;
    const aiReport = data.data.aiReport;

    return (
        <>
            <Navbar />
            <div className="results-container">
                {/* Header Section */}
                <div className="report-header">
                    <div className="header-content">
                        <div className="url-section">
                            <h1 className="scanned-url">{report.url}</h1>
                            <div className="scan-info">
                                <span className="scan-date">Scanned: {formatDate(report.scannedAt)}</span>
                                <span className="scan-duration">Duration: {report.scanDuration}s</span>
                            </div>
                        </div>
                        
                        <div className="score-section">
                            <div className="score-circle">
                                <div className="score-number">{report.score}</div>
                                <div className="score-label">Score</div>
                            </div>
                            <div className="grade-section">
                                <div className="grade">{report.grade}</div>
                                <div className="grade-label">Grade</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="message-section">
                        <p className="scan-message">{report.message}</p>
                    </div>
                </div>

                {/* Summary Chips */}
                <div className="summary-section">
                    <div className="summary-chips">
                        <div className="summary-chip critical">
                            <span className="chip-count">{report.summary.critical}</span>
                            <span className="chip-label">Critical</span>
                        </div>
                        <div className="summary-chip high">
                            <span className="chip-count">{report.summary.high}</span>
                            <span className="chip-label">High</span>
                        </div>
                        <div className="summary-chip medium">
                            <span className="chip-count">{report.summary.medium}</span>
                            <span className="chip-label">Medium</span>
                        </div>
                        <div className="summary-chip low">
                            <span className="chip-count">{report.summary.low}</span>
                            <span className="chip-label">Low</span>
                        </div>
                        <div className="summary-chip total">
                            <span className="chip-count">{report.summary.total}</span>
                            <span className="chip-label">Total</span>
                        </div>
                    </div>
                </div>

                {/* Findings Table */}
                <div className="findings-section">
                    <div className="section-header">
                        <h2>Security Findings</h2>
                        <button className="export-btn" onClick={exportResults}>
                            <Download size={16} />
                            Export Raw Data
                        </button>
                    </div>
                    
                    <div className="table-container">
                        <table className="findings-table">
                            <thead>
                                <tr>
                                    <th>Vulnerability</th>
                                    <th>Explanation</th>
                                    <th>Severity</th>
                                    <th>Category</th>
                                    <th>Risk</th>
                                    <th>Fix/Recommendation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {report.findings.map((finding: any, index: number) => (
                                    <tr key={index} className="finding-row">
                                        <td className="vulnerability-cell">
                                            <div className="vulnerability-title">{finding.title}</div>
                                        </td>
                                        <td className="explanation-cell">
                                            <p>{finding.plainEnglish}</p>
                                        </td>
                                        <td className="severity-cell">
                                            <div 
                                                className="severity-badge"
                                                style={{ backgroundColor: getSeverityColor(finding.severity) }}
                                            >
                                                {getSeverityIcon(finding.severity)}
                                                <span>{finding.severity}</span>
                                            </div>
                                        </td>
                                        <td className="category-cell">
                                            <span className="category-badge">{finding.category}</span>
                                        </td>
                                        <td className="risk-cell">
                                            <p>{finding.risk}</p>
                                        </td>
                                        <td className="fix-cell">
                                            <p>{finding.fix}</p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Mobile Card Layout */}
                    <div className="mobile-findings">
                        {report.findings.map((finding: any, index: number) => (
                            <div key={index} className="finding-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        <h3>{finding.title}</h3>
                                        <span className="category-badge">{finding.category}</span>
                                    </div>
                                    <div 
                                        className="severity-badge"
                                        style={{ backgroundColor: getSeverityColor(finding.severity) }}
                                    >
                                        {getSeverityIcon(finding.severity)}
                                        <span>{finding.severity}</span>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-section">
                                        <h4>What this means:</h4>
                                        <p>{finding.plainEnglish}</p>
                                    </div>
                                    <div className="card-section">
                                        <h4>Risk:</h4>
                                        <p>{finding.risk}</p>
                                    </div>
                                    <div className="card-section">
                                        <h4>How to fix:</h4>
                                        <p>{finding.fix}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI Report Section */}
                <div className="ai-report-section">
                    <div className="section-header">
                        <h2>AI Analysis & Recommendations</h2>
                        <div className="tab-buttons">
                            <button 
                                className={`tab-btn ${activeTab === 'vibe' ? 'active' : ''}`}
                                onClick={() => setActiveTab('vibe')}
                            >
                                Friendly Summary
                            </button>
                            <button 
                                className={`tab-btn ${activeTab === 'indepth' ? 'active' : ''}`}
                                onClick={() => setActiveTab('indepth')}
                            >
                                Technical Details
                            </button>
                        </div>
                    </div>

                    <div className="ai-content">
                        {activeTab === 'vibe' ? (
                            <div className="vibe-content">
                                <div className="vibe-summary">
                                    <h3>What This Means</h3>
                                    <p>{aiReport.vibe.summary}</p>
                                </div>
                                
                                <div className="step-by-step-fixes">
                                    <h3>Step-by-Step Fixes</h3>
                                    {aiReport.vibe.fixes.map((fix: any, index: number) => (
                                        <div key={index} className="fix-item">
                                            <div className="fix-header">
                                                <h4>{fix.issue}</h4>
                                                <span className={`necessity-badge ${fix.necessary.toLowerCase().includes('yes') ? 'critical' : fix.necessary.toLowerCase().includes('good') ? 'important' : 'optional'}`}>
                                                    {fix.necessary}
                                                </span>
                                            </div>
                                            <div className="fix-steps">
                                                {fix.stepByStep.map((step: string, stepIndex: number) => (
                                                    <div key={stepIndex} className="step-item">
                                                        <span className="step-number">{stepIndex + 1}</span>
                                                        <p>{step}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="indepth-content">
                                <div className="indepth-summary">
                                    <h3>Technical Analysis</h3>
                                    <p>{aiReport.inDepth.summary}</p>
                                </div>
                                
                                <div className="technical-fixes">
                                    <h3>Technical Recommendations</h3>
                                    {aiReport.inDepth.fixes.map((fix: any, index: number) => (
                                        <div key={index} className="technical-fix-item">
                                            <h4>{fix.issue}</h4>
                                            <p>{fix.recommendation}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
