'use client';
import { useRef, useState } from 'react';
export default function HouseScene(){
 const frame=useRef<HTMLDivElement>(null);const[position,setPosition]=useState({x:68,y:48});const[active,setActive]=useState(false);const[pinned,setPinned]=useState(false);
 const move=(event:React.PointerEvent<HTMLDivElement>)=>{const rect=frame.current?.getBoundingClientRect();if(!rect)return;setPosition({x:((event.clientX-rect.left)/rect.width)*100,y:((event.clientY-rect.top)/rect.height)*100})};
 const style={'--scan-x':`${position.x}%`,'--scan-y':`${position.y}%`,'--tilt-x':`${(position.x-50)*-.025}deg`,'--tilt-y':`${(position.y-50)*.018}deg`} as React.CSSProperties;
 return <div ref={frame} className={`real-house ${active||pinned?'scanning':''} ${pinned?'pinned':''}`} style={style} onPointerMove={move} onPointerEnter={()=>setActive(true)} onPointerLeave={()=>setActive(false)} onPointerDown={()=>setPinned(!pinned)} role="button" tabIndex={0} aria-label="Interactive house. Move the pointer to reveal plumbing, or tap to keep the plumbing visible." onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setPinned(!pinned)}}}>
  <img className="house-photo base" src="/house-exterior.png" alt="Photorealistic modern Las Vegas home at dusk" draggable={false}/><img className="house-photo reveal" src="/house-plumbing.png" alt="" aria-hidden="true" draggable={false}/><div className="scanner-ring"><i/><span>PLUMBING SCAN</span></div><div className="scan-label hot">HOT WATER</div><div className="scan-label cold">COLD WATER</div>
 </div>;
}
