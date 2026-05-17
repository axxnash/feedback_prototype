import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import { setStoredAuth } from "../utils/auth";

/* ─── Brand tokens ─────────────────────────────────────────────────── */
const C = {
  green:       "#6B9B2A",
  greenDark:   "#4E7A1A",
  greenLight:  "#EEF4DC",
  orange:      "#D95F0E",
  orangeDark:  "#B04A07",
  orangeLight: "#FDF0E6",
  charcoal:    "#2D2A26",
  charcoalMid: "#5A5550",
  charcoalLt:  "#8A857F",
  border:      "#DDD8D2",
  bg:          "#F4F0EA",
  panelBg:     "#EDE8E0",
  white:       "#FFFFFF",
};

const ff     = `'DM Sans', 'Helvetica Neue', Arial, sans-serif`;
const serif  = `'Lora', Georgia, serif`;

const controlRadius = 12;
const controlHeight = 46;
const actionButtonStyle = {
  minHeight: controlHeight,
  padding: "0 16px",
  borderRadius: controlRadius,
  fontSize: 14,
  fontWeight: 600,
  fontFamily: ff,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  transition: "background .2s, border-color .2s, color .2s, transform .15s",
};

/* ─── SVG logo pins ─────────────────────────────────────────────────── */
function SpoonPin() {
  return (
    <svg width="34" height="46" viewBox="0 0 34 46" fill="none">
      <ellipse cx="17" cy="17" rx="17" ry="17" fill={C.green}/>
      <ellipse cx="17" cy="11" rx="4.5" ry="5" fill="white" opacity="0.9"/>
      <rect x="15" y="16" width="4" height="12" rx="2" fill="white" opacity="0.9"/>
      <polygon points="17,44 11,28 23,28" fill={C.green}/>
    </svg>
  );
}
function ForkPin() {
  return (
    <svg width="34" height="46" viewBox="0 0 34 46" fill="none">
      <ellipse cx="17" cy="17" rx="17" ry="17" fill={C.orange}/>
      <rect x="13" y="8"  width="2" height="8" rx="1" fill="white" opacity="0.9"/>
      <rect x="16" y="8"  width="2" height="8" rx="1" fill="white" opacity="0.9"/>
      <rect x="19" y="8"  width="2" height="8" rx="1" fill="white" opacity="0.9"/>
      <rect x="13" y="15" width="8" height="2" rx="1" fill="white" opacity="0.9"/>
      <rect x="15.5" y="17" width="3" height="11" rx="1.5" fill="white" opacity="0.9"/>
      <polygon points="17,44 11,28 23,28" fill={C.orange}/>
    </svg>
  );
}

/* ─── Illustrated scene ─────────────────────────────────────────────── */
function Scene() {
  return (
    <svg viewBox="0 0 320 240" fill="none" style={{ width:"100%", maxWidth:320 }}>
      {/* City silhouette */}
      <rect x="15"  y="130" width="28" height="80" rx="2" fill={C.charcoalLt} opacity="0.15"/>
      <rect x="48"  y="105" width="38" height="105" rx="2" fill={C.charcoalLt} opacity="0.12"/>
      <rect x="240" y="115" width="32" height="105" rx="2" fill={C.charcoalLt} opacity="0.12"/>
      <rect x="278" y="135" width="28" height="85" rx="2" fill={C.charcoalLt} opacity="0.10"/>
      {/* House */}
      <rect x="200" y="150" width="50" height="60" rx="3" fill={C.charcoalLt} opacity="0.13"/>
      <polygon points="200,150 250,150 225,122" fill={C.charcoalLt} opacity="0.13"/>
      {/* Ground shadow */}
      <ellipse cx="160" cy="228" rx="120" ry="10" fill={C.green} opacity="0.1"/>
      {/* Box */}
      <rect x="120" y="158" width="80" height="52" rx="5" fill="#C8924A"/>
      <rect x="120" y="158" width="80" height="16" rx="5" fill="#A87030"/>
      <rect x="152" y="148" width="16" height="26" rx="3" fill="#D4A560"/>
      <text x="138" y="196" fontFamily="Arial" fontSize="8" fontWeight="800" fill="white" opacity="0.9" letterSpacing="1.2">DONATE</text>
      {/* Veggies */}
      <ellipse cx="140" cy="157" rx="10" ry="7" fill="#E87636"/>
      <ellipse cx="160" cy="154" rx="7"  ry="9" fill="#4CAF50"/>
      <ellipse cx="178" cy="157" rx="9"  ry="7" fill="#FFCA28"/>
      <rect    x="155" y="143" width="6" height="9" rx="2" fill="#388E3C"/>
      {/* Left person (green = vendor) */}
      <circle cx="92" cy="104" r="18" fill="#F5C8A0"/>
      <ellipse cx="92" cy="91" rx="18" ry="10" fill="#2D1B0E"/>
      <rect x="72" y="120" width="40" height="58" rx="8" fill={C.green}/>
      <text x="87" y="148" fontSize="10" fill="white" opacity="0.7">♥</text>
      <rect x="50"  y="124" width="24" height="11" rx="5.5" fill={C.green}/>
      <rect x="110" y="124" width="24" height="11" rx="5.5" fill={C.green}/>
      <circle cx="48"  cy="130" r="7" fill="#F5C8A0"/>
      <circle cx="135" cy="130" r="7" fill="#F5C8A0"/>
      <rect x="76"  y="174" width="14" height="38" rx="6" fill="#2D2A26"/>
      <rect x="94"  y="174" width="14" height="38" rx="6" fill="#2D2A26"/>
      {/* Right person (orange = NGO) */}
      <circle cx="228" cy="104" r="18" fill="#F5C8A0"/>
      <ellipse cx="228" cy="91" rx="18" ry="12" fill="#2D1B0E"/>
      <path d="M210 98 Q208 126 212 140" stroke="#2D1B0E" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <path d="M246 98 Q248 126 244 140" stroke="#2D1B0E" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <rect x="210" y="120" width="38" height="56" rx="8" fill={C.orange}/>
      <rect x="190" y="124" width="22" height="11" rx="5.5" fill={C.orange}/>
      <rect x="247" y="124" width="22" height="11" rx="5.5" fill={C.orange}/>
      <circle cx="188" cy="130" r="7" fill="#F5C8A0"/>
      <circle cx="270" cy="130" r="7" fill="#F5C8A0"/>
      <rect x="213" y="174" width="14" height="38" rx="6" fill="#2D2A26"/>
      <rect x="232" y="174" width="14" height="38" rx="6" fill="#2D2A26"/>
      {/* Hearts */}
      <text x="146" y="84"  fontSize="15" fill={C.green}  opacity="0.65">♥</text>
      <text x="175" y="68"  fontSize="10" fill={C.orange} opacity="0.55">♥</text>
      <text x="122" y="70"  fontSize="9"  fill={C.green}  opacity="0.45">♥</text>
      {/* Plants */}
      <path d="M22 228 Q18 196 44 178 Q38 200 56 212 Q36 212 22 228Z" fill={C.green} opacity="0.35"/>
      <path d="M298 228 Q302 196 276 178 Q282 200 264 212 Q284 212 298 228Z" fill={C.green} opacity="0.35"/>
    </svg>
  );
}

/* ─── Field component ───────────────────────────────────────────────── */
function Field({ label, name, type = "text", placeholder, value, onChange, icon }) {
  const [focused, setFocused] = useState(false);
  const [showPw,  setShowPw]  = useState(false);
  const isPw = type === "password";
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{
        display:"block", fontSize:11, fontWeight:700, color:C.charcoal,
        fontFamily:ff, textTransform:"uppercase", letterSpacing:"0.7px", marginBottom:6,
      }}>{label}</label>
      <div style={{ position:"relative" }}>
        <span style={{
          position:"absolute", left:13, top:"50%", transform:"translateY(-50%)",
          fontSize:15, color: focused ? C.green : C.charcoalLt,
          transition:"color .2s", pointerEvents:"none", userSelect:"none",
        }}>{icon}</span>
        <input
          name={name}
          type={isPw && showPw ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width:"100%", minHeight:controlHeight, padding:"12px 44px 12px 42px",
            fontSize:14, fontFamily:ff, color:C.charcoal,
            background:C.white,
            border:`1.5px solid ${focused ? C.green : C.border}`,
            borderRadius:controlRadius, outline:"none", boxSizing:"border-box",
            transition:"border-color .2s, box-shadow .2s",
            boxShadow: focused ? `0 0 0 3px ${C.greenLight}` : "none",
          }}
        />
        {isPw && (
          <button
            type="button"
            aria-label={showPw ? "Hide password" : "Show password"}
            onClick={() => setShowPw(s => !s)}
            style={{
              position:"absolute", right:8, top:"50%", transform:"translateY(-50%)",
              width:32, height:32, borderRadius:8,
              background:"transparent", border:"none", cursor:"pointer",
              fontSize:15, color:C.charcoalLt, padding:0, lineHeight:1,
              display:"flex", alignItems:"center", justifyContent:"center",
            }}
          >
            {showPw ? "🙈" : "👁"}
          </button>
        )}
      </div>
    </div>
  );
}

/* ─── Login page ────────────────────────────────────────────────────── */
function Login({ onLogin }) {
  const navigate = useNavigate();
  const [form,    setForm]    = useState({ email: "", password: "" });
  const [error,   setError]   = useState("");
  const [loading, setLoading] = useState(false);
  const [hovBtn,  setHovBtn]  = useState(false);

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await loginUser(form);
      setStoredAuth(data);
      onLogin(data);
      const roleRedirects = { VENDOR: "/vendor", NGO: "/ngo", ADMIN: "/admin", INDIVIDUAL: "/individual" };
      navigate(roleRedirects[data.user.role] || "/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{
      minHeight:"100vh", background:C.bg,
      display:"flex", alignItems:"center", justifyContent:"center",
      padding:"1.5rem", fontFamily:ff,
      position:"relative", overflow:"hidden",
    }}>

      {/* Decorative leaf watermarks */}
      {[
        { top:-20, left:-30, rotate:0,   size:160, op:0.55 },
        { bottom:-30, right:-20, rotate:180, size:170, op:0.5 },
        { top:"35%", right:"36%", rotate:30, size:90, op:0.35 },
      ].map((s, i) => (
        <svg key={i} viewBox="0 0 120 200" fill="none"
          style={{ position:"absolute", width:s.size, pointerEvents:"none", opacity:s.op,
            top:s.top, left:s.left, bottom:s.bottom, right:s.right,
            transform:`rotate(${s.rotate}deg)` }}>
          <path d="M60 190 C20 150 0 90 10 40 C20 0 50 -5 70 20 C95 50 100 120 60 190Z"
            fill={C.green}/>
        </svg>
      ))}

      {/* Card shell */}
      <div style={{
        display:"flex", width:"100%", maxWidth:900, minHeight:560,
        borderRadius:24, overflow:"hidden",
        boxShadow:"0 24px 64px rgba(0,0,0,0.11)",
      }}>

        {/* ── LEFT PANEL ── */}
        <div style={{
          flex:"0 0 46%", background:C.panelBg,
          padding:"2.25rem 2rem 1.75rem",
          display:"flex", flexDirection:"column",
          justifyContent:"space-between", position:"relative", overflow:"hidden",
        }}>
          {/* soft glow */}
          <div style={{
            position:"absolute", bottom:-60, left:-40, width:260, height:300,
            background:`radial-gradient(ellipse at 40% 60%, ${C.green}1A 0%, transparent 70%)`,
            pointerEvents:"none",
          }}/>

          {/* Logo row */}
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
<<<<<<< HEAD
            <div style={{ display:"flex", gap:6, alignItems:"flex-end" }}>
              <SpoonPin/><ForkPin/>
            </div>
            <p style={{ margin:0 }}>
              <span style={{ fontFamily:serif, fontSize:24, fontWeight:700, color:C.charcoal }}>Feed </span>
              <span style={{ fontFamily:serif, fontSize:24, fontWeight:700, color:C.orange }}>Back</span>
            </p>
            <p style={{ fontSize:12, color:C.charcoalMid, textAlign:"center", margin:0, lineHeight:1.5 }}>
              Connecting surplus food with<br/>communities in need
            </p>
=======
          <img src="/src/feedback-logo.png" alt="FeedBack Logo" style={{
            width: "auto",
            height: "100px",
            objectFit: "contain"
          }}/>
>>>>>>> 9a07e37 (Initial local commit)
          </div>

          {/* Headline */}
          <div>
            <h2 style={{ fontFamily:serif, fontSize:26, fontWeight:700, color:C.charcoal,
              lineHeight:1.35, margin:"0 0 2px" }}>
<<<<<<< HEAD
              Together, we can<br/>reduce waste and
            </h2>
            <h2 style={{ fontFamily:serif, fontSize:26, fontWeight:700, color:C.green,
              margin:0, lineHeight:1.35 }}>
              spread hope.
=======
              <center>Together, we can<br/>reduce waste and</center>
            </h2>
            <h2 style={{ fontFamily:serif, fontSize:26, fontWeight:700, color:C.green,
              margin:0, lineHeight:1.35 }}>
              <center>spread hope.</center>
>>>>>>> 9a07e37 (Initial local commit)
            </h2>
          </div>

          {/* Illustration */}
          <div style={{ display:"flex", justifyContent:"center" }}>
            <Scene/>
          </div>

          {/* Mission strip */}
          <div style={{ display:"flex", gap:0, borderTop:`1px solid ${C.border}`, paddingTop:"0.9rem" }}>
            {[
              { icon:"🌿", label:"Reduce Food Waste" },
              { icon:"🤝", label:"Support Communities" },
              { icon:"♥",  label:"Create a Better Tomorrow" },
            ].map((item, i) => (
              <div key={i} style={{
                flex:1, display:"flex", alignItems:"center", gap:6,
                paddingRight: i < 2 ? "10px" : 0,
                borderRight: i < 2 ? `1px solid ${C.border}` : "none",
                paddingLeft: i > 0 ? "10px" : 0,
              }}>
                <div style={{
                  width:30, height:30, borderRadius:"50%", flexShrink:0,
                  background: i === 1 ? C.orangeLight : C.greenLight,
                  display:"flex", alignItems:"center", justifyContent:"center", fontSize:14,
                }}>{item.icon}</div>
                <span style={{ fontSize:10, color:C.charcoalMid, fontFamily:ff, lineHeight:1.3 }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div style={{
          flex:1, background:C.white,
          padding:"3rem 2.5rem",
          display:"flex", flexDirection:"column", justifyContent:"center",
        }}>

          <div style={{ marginBottom:"1.75rem" }}>
            <h1 style={{
              fontFamily:serif, fontSize:28, fontWeight:700, color:C.charcoal,
              margin:"0 0 5px", display:"flex", alignItems:"center", gap:8,
            }}>
<<<<<<< HEAD
              Welcome back <span style={{ fontSize:22 }}>🌿</span>
=======
              Welcome back <span style={{ fontSize:22 }}></span>
>>>>>>> 9a07e37 (Initial local commit)
            </h1>
            <p style={{ fontSize:13, color:C.charcoalLt, margin:0 }}>
              Sign in to access your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <Field label="Email"    name="email"    type="email"    placeholder="you@example.com" value={form.email}    onChange={handleChange} icon="✉"/>
<<<<<<< HEAD
            <Field label="Password" name="password" type="password" placeholder="••••••••"       value={form.password} onChange={handleChange} icon="🔒"/>
=======
            <Field label="Password" name="password" type="password" placeholder="••••••••"       value={form.password} onChange={handleChange} icon="🔒︎"/>
>>>>>>> 9a07e37 (Initial local commit)

            {error && (
              <div style={{
                background:"#FEF2F2", border:"1px solid #FCA5A5", borderRadius:8,
                padding:"10px 14px", fontSize:13, color:"#B91C1C",
                display:"flex", alignItems:"center", gap:8, marginBottom:14,
              }}>⚠ {error}</div>
            )}

            {/* Sign-in button */}
            <button
              type="submit"
              disabled={loading}
              onMouseEnter={() => setHovBtn(true)}
              onMouseLeave={() => setHovBtn(false)}
              style={{
                ...actionButtonStyle,
                width:"100%",
                background: hovBtn && !loading ? C.orangeDark : C.orange,
                color:"#fff", border:"none", cursor: loading ? "not-allowed" : "pointer",
                fontSize:16, fontWeight:700, gap:10,
                transform: hovBtn && !loading ? "translateY(-1px)" : "none",
                opacity: loading ? 0.75 : 1, letterSpacing:"0.3px",
              }}
            >
              {loading ? "Signing in…" : "Sign In"}
              {!loading && <span style={{ fontSize:18 }}>→</span>}
            </button>
          </form>

          <p style={{ textAlign:"center", fontSize:13, color:C.charcoalLt, marginTop:"1.25rem" }}>
            Don't have an account?{" "}
            <span style={{ color:C.orange, fontWeight:600, cursor:"pointer" }}>Contact Admin</span>
          </p>

<<<<<<< HEAD
          {/* Security badge */}
          <div style={{
            marginTop:"1.5rem", display:"flex", alignItems:"center", justifyContent:"center",
            gap:8, padding:"9px 20px",
            border:`1.5px solid ${C.border}`, borderRadius:40,
            width:"fit-content", marginLeft:"auto", marginRight:"auto",
          }}>
            <span style={{ fontSize:15, color:C.green }}>🛡</span>
            <span style={{ fontSize:12, color:C.charcoalLt }}>Your data is safe with us</span>
          </div>
=======
>>>>>>> 9a07e37 (Initial local commit)
        </div>

      </div>
    </main>
  );
}

export default Login;
