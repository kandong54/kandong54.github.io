"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[103],{9103:(z,h,o)=>{o.r(h),o.d(h,{CameraModule:()=>y});var u=o(6895),m=o(3456),c=o(5861),i=o(4650),f=o(3411);const v=["myCanvas"],p=[{path:"",component:(()=>{class t{constructor(e,a){this.clientService=e,this.router=a,this.cameraWidth=0,this.cameraHeight=0,this.imageWidth=0,this.imageHeight=0,this.imageStream=null,this.lastTime=0,this.context2D=null,this.myCanvas={},this.interval=230}ngOnInit(){this.clientService.connect().then(e=>console.log("Connect result:",e)).catch(e=>{alert("Connection error: "+e),this.router.navigate(["/login"])})}updateFps(){let e=Date.now(),a=e-this.lastTime;this.lastTime=e,this.interval=.9*this.interval+a*(1-.9)}handleCamera(e){this.updateFps();let a=e.getImage_asU8(),n=e.getBoxList(),s=new Image,w=new Blob([a],{type:"image/jpeg"});s.src=URL.createObjectURL(w),s.onload=()=>{if(null!==this.context2D){this.context2D.drawImage(s,0,0,this.imageWidth,this.imageHeight,0,0,this.context2D.canvas.width,this.context2D.canvas.height),this.context2D.fillText("FPS: "+(1e3/this.interval).toFixed(2),10,50);for(const l of n){let g=l.getLeft(),d=l.getTop(),D=l.getWidth(),C=l.getHeight();this.context2D.strokeRect(g,d,D,C);let S=l.getConfidence();this.context2D.fillText(Math.round(100*S)+"%",g+5,d+C-6)}URL.revokeObjectURL(s.src)}}}resizeCanvas(e,a){e.style.width="100%",e.style.height="100%";let n=e.offsetWidth,s=e.offsetHeight;n/s>a?e.style.width=Math.floor(s*a)+"px":e.style.height=Math.floor(n/a)+"px"}getImageSize(){var e=this;return(0,c.Z)(function*(){let a=yield e.clientService.getImageSize();if(null===a)throw new Error("Failed to get image size!");[e.imageWidth,e.imageHeight,e.cameraWidth,e.cameraHeight]=a,e.myCanvas.nativeElement.width=e.cameraWidth,e.myCanvas.nativeElement.height=e.cameraHeight,e.resizeCanvas(e.myCanvas.nativeElement,e.cameraWidth/e.cameraHeight),window.addEventListener("resize",()=>e.resizeCanvas(e.myCanvas.nativeElement,e.cameraWidth/e.cameraHeight))})()}ngAfterViewInit(){var e=this;return(0,c.Z)(function*(){yield e.getImageSize(),e.context2D=e.myCanvas.nativeElement.getContext("2d"),e.context2D&&(e.context2D.strokeStyle="red",e.context2D.lineWidth=3,e.context2D.font="48px Roboto",e.context2D.shadowColor="white",e.context2D.shadowBlur=3,e.context2D.shadowOffsetX=1,e.context2D.shadowOffsetY=1),e.imageStream=e.clientService.getCamera(),null!==e.imageStream?(e.imageStream.on("error",a=>alert("Connection error: "+a)),e.imageStream.on("end",()=>alert("Connection ends.")),e.imageStream.on("data",a=>e.handleCamera(a)),e.lastTime=Date.now()):alert("Failed to get camera data!")})()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(f.y),i.Y36(m.F0))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-camera"]],viewQuery:function(e,a){if(1&e&&i.Gf(v,5),2&e){let n;i.iGM(n=i.CRH())&&(a.myCanvas=n.first)}},decls:2,vars:0,consts:[[1,"center"],["myCanvas",""]],template:function(e,a){1&e&&i._UZ(0,"canvas",0,1)},styles:[".center[_ngcontent-%COMP%]{position:fixed;border:1px solid;left:50%;transform:translate(-50%)}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[m.Bz.forChild(p),m.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[u.ez,x]}),t})()}}]);