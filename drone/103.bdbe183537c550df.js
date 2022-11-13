"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[103],{9103:(z,h,o)=>{o.r(h),o.d(h,{CameraModule:()=>y});var u=o(6895),m=o(3456),c=o(5861),n=o(4650),f=o(3411);const v=["myCanvas"],p=[{path:"",component:(()=>{class t{constructor(e,i){this.clientService=e,this.router=i,this.imageWidth=0,this.imageHeight=0,this.imageStream=null,this.lastTime=0,this.context2D=null,this.myCanvas={},this.interval=30}ngOnInit(){this.clientService.connect().then(e=>console.log("Connect result:",e)).catch(e=>{alert("Connection error: "+e),this.router.navigate(["/login"])})}updateFps(){let e=Date.now(),i=e-this.lastTime;this.lastTime=e,this.interval=.95*this.interval+i*(1-.95)}handleCamera(e){this.updateFps();let i=e.getImage_asU8(),a=e.getBoxList(),s=new Image,w=new Blob([i],{type:"image/jpeg"});s.src=URL.createObjectURL(w),s.onload=()=>{if(null!==this.context2D){this.context2D.drawImage(s,0,0,this.imageWidth,this.imageHeight,0,0,this.context2D.canvas.width,this.context2D.canvas.height),this.context2D.fillText("FPS: "+(1e3/this.interval).toFixed(2),10,50);for(const l of a){let g=l.getLeft(),d=l.getTop(),D=l.getWidth(),C=l.getHeight();this.context2D.strokeRect(g,d,D,C);let S=l.getConfidence();this.context2D.fillText(Math.round(100*S)+"%",g+5,d+C-6)}URL.revokeObjectURL(s.src)}}}resizeCanvas(e,i){e.style.width="100%",e.style.height="100%";let a=e.offsetWidth,s=e.offsetHeight;a/s>i?e.style.width=Math.floor(s*i)+"px":e.style.height=Math.floor(a/i)+"px"}getImageSize(){var e=this;return(0,c.Z)(function*(){let i=yield e.clientService.getImageSize();if(null===i)throw new Error("Failed to get image size!");[e.imageWidth,e.imageHeight]=i,e.myCanvas.nativeElement.width=e.imageWidth,e.myCanvas.nativeElement.height=e.imageHeight,e.resizeCanvas(e.myCanvas.nativeElement,e.imageWidth/e.imageHeight),window.addEventListener("resize",()=>e.resizeCanvas(e.myCanvas.nativeElement,e.imageWidth/e.imageHeight))})()}ngAfterViewInit(){var e=this;return(0,c.Z)(function*(){yield e.getImageSize(),e.context2D=e.myCanvas.nativeElement.getContext("2d"),e.context2D&&(e.context2D.strokeStyle="red",e.context2D.lineWidth=3,e.context2D.font="48px Roboto",e.context2D.shadowColor="white",e.context2D.shadowBlur=3,e.context2D.shadowOffsetX=1,e.context2D.shadowOffsetY=1),e.imageStream=e.clientService.getCamera(),null!==e.imageStream?(e.imageStream.on("error",i=>alert("Connection error: "+i)),e.imageStream.on("end",()=>alert("Connection ends.")),e.imageStream.on("data",i=>e.handleCamera(i)),e.lastTime=Date.now()):alert("Failed to get camera data!")})()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(f.y),n.Y36(m.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-camera"]],viewQuery:function(e,i){if(1&e&&n.Gf(v,5),2&e){let a;n.iGM(a=n.CRH())&&(i.myCanvas=a.first)}},decls:2,vars:0,consts:[[1,"center"],["myCanvas",""]],template:function(e,i){1&e&&n._UZ(0,"canvas",0,1)},styles:[".center[_ngcontent-%COMP%]{position:fixed;border:1px solid;left:50%;transform:translate(-50%)}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[m.Bz.forChild(p),m.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[u.ez,x]}),t})()}}]);