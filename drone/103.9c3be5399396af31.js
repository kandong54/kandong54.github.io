"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[103],{9103:(z,h,r)=>{r.r(h),r.d(h,{CameraModule:()=>y});var C=r(6895),m=r(3456),c=r(5861),i=r(4650),f=r(3411);const v=["myCanvas"],p=[{path:"",component:(()=>{class t{constructor(e,n){this.clientService=e,this.router=n,this.imageWidth=0,this.imageHeight=0,this.imageStream=null,this.lastTime=0,this.context2D=null,this.myCanvas={},this.interval=100}ngOnInit(){this.clientService.connect().then(e=>console.log("Connect result:",e)).catch(e=>{alert("Connection error: "+e),this.router.navigate(["/login"])})}updateFps(){let e=Date.now(),n=e-this.lastTime;this.lastTime=e,this.interval=.95*this.interval+n*(1-.95)}handleCamera(e){this.updateFps();let n=e.getImage_asU8(),a=e.getBoxList(),o=new Image,w=new Blob([n],{type:"image/jpeg"});o.src=URL.createObjectURL(w),o.onload=()=>{if(null!==this.context2D){this.context2D.drawImage(o,0,0,this.imageWidth,this.imageHeight,0,0,this.context2D.canvas.width,this.context2D.canvas.height),this.context2D.fillText("FPS: "+(1e3/this.interval).toFixed(2),10,50);for(const l of a){let g=l.getLeft(),d=l.getTop(),D=l.getWidth(),u=l.getHeight();this.context2D.strokeRect(g,d,D,u);let S=l.getConfidence(),M=l.getDepth();this.context2D.fillText(Math.round(100*S)+"% "+Math.round(M)+"cm",g+5,d+u-6)}URL.revokeObjectURL(o.src)}}}resizeCanvas(e,n){let a=window.innerWidth,o=window.innerHeight-e.offsetTop;a/o>n?(e.style.width=Math.floor(o*n)+"px",e.style.height=o+"px"):(e.style.height=Math.floor(a/n)+"px",e.style.width=a+"px")}getImageSize(){var e=this;return(0,c.Z)(function*(){let n=yield e.clientService.getImageSize();if(null===n)throw new Error("Failed to get image size!");[e.imageWidth,e.imageHeight]=n,e.myCanvas.nativeElement.width=e.imageWidth,e.myCanvas.nativeElement.height=e.imageHeight,e.resizeCanvas(e.myCanvas.nativeElement,e.imageWidth/e.imageHeight),window.addEventListener("resize",()=>e.resizeCanvas(e.myCanvas.nativeElement,e.imageWidth/e.imageHeight))})()}ngAfterViewInit(){var e=this;return(0,c.Z)(function*(){yield e.getImageSize(),e.context2D=e.myCanvas.nativeElement.getContext("2d"),e.context2D&&(e.context2D.strokeStyle="red",e.context2D.lineWidth=3,e.context2D.font="48px Roboto",e.context2D.shadowColor="white",e.context2D.shadowBlur=3,e.context2D.shadowOffsetX=1,e.context2D.shadowOffsetY=1),e.imageStream=e.clientService.getCamera(),null!==e.imageStream?(e.imageStream.on("error",n=>alert("Connection error: "+n)),e.imageStream.on("end",()=>alert("Connection ends.")),e.imageStream.on("data",n=>e.handleCamera(n)),e.lastTime=Date.now()):alert("Failed to get camera data!")})()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(f.y),i.Y36(m.F0))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-camera"]],viewQuery:function(e,n){if(1&e&&i.Gf(v,5),2&e){let a;i.iGM(a=i.CRH())&&(n.myCanvas=a.first)}},decls:2,vars:0,consts:[[1,"center"],["myCanvas",""]],template:function(e,n){1&e&&i._UZ(0,"canvas",0,1)},styles:[".center[_ngcontent-%COMP%]{position:fixed;border:1px solid;left:50%;transform:translate(-50%)}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[m.Bz.forChild(p),m.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[C.ez,x]}),t})()}}]);