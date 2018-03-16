try{/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)||$(function(){var canvas=document.querySelector("canvas"),ctx=canvas.getContext("2d");canvas.width=window.innerWidth,canvas.height=window.innerHeight,ctx.lineWidth=.3,ctx.strokeStyle=new Color(150).style;var dots,mousePosition={x:30*canvas.width/100,y:30*canvas.height/100},aWidth=$(window).width();function colorValue(min){return Math.floor(255*Math.random()+min)}function mixComponents(comp1,weight1,comp2,weight2){return(comp1*weight1+comp2*weight2)/(weight1+weight2)}function Color(min){min=min||0,this.r=colorValue(min),this.g=colorValue(min),this.b=colorValue(min),this.style=(this.r,this.g,this.b,"rgba(255,255,255, 0.3)")}function Dot(){this.x=Math.random()*canvas.width,this.y=Math.random()*canvas.height,this.vx=-.5+Math.random(),this.vy=-.5+Math.random(),this.radius=3*Math.random(),this.color=new Color}dots=aWidth<1600?{nb:200,distance:100,d_radius:80,array:[]}:{nb:250,distance:150,d_radius:100,array:[]},Dot.prototype={draw:function(){ctx.beginPath(),ctx.fillStyle=this.color.style,ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),ctx.fill()}},$("canvas").on("mousemove",function(e){mousePosition.x=e.pageX,mousePosition.y=e.pageY}),$("canvas").on("mouseleave",function(e){mousePosition.x=canvas.width/2,mousePosition.y=canvas.height/2}),function(){for(i=0;i<dots.nb;i++)dots.array.push(new Dot)}(),requestAnimationFrame(function animateDots(){ctx.clearRect(0,0,canvas.width,canvas.height),function(){for(i=0;i<dots.nb;i++){var dot=dots.array[i];dot.y<0||dot.y>canvas.height?(dot.vx=dot.vx,dot.vy=-dot.vy):(dot.x<0||dot.x>canvas.width)&&(dot.vx=-dot.vx,dot.vy=dot.vy),dot.x+=dot.vx,dot.y+=dot.vy}}(),function(){for(i=0;i<dots.nb;i++)for(j=0;j<dots.nb;j++)i_dot=dots.array[i],j_dot=dots.array[j],i_dot.x-j_dot.x<dots.distance&&i_dot.y-j_dot.y<dots.distance&&i_dot.x-j_dot.x>-dots.distance&&i_dot.y-j_dot.y>-dots.distance&&i_dot.x-mousePosition.x<dots.d_radius&&i_dot.y-mousePosition.y<dots.d_radius&&i_dot.x-mousePosition.x>-dots.d_radius&&i_dot.y-mousePosition.y>-dots.d_radius&&(ctx.beginPath(),ctx.strokeStyle=(dot1=i_dot,dot2=j_dot,color1=dot1.color,color2=dot2.color,r=mixComponents(color1.r,dot1.radius,color2.r,dot2.radius),g=mixComponents(color1.g,dot1.radius,color2.g,dot2.radius),b=mixComponents(color1.b,dot1.radius,color2.b,dot2.radius),Math.floor(r),Math.floor(g),Math.floor(b),"rgba(255,255,255, 0.3)"),ctx.moveTo(i_dot.x,i_dot.y),ctx.lineTo(j_dot.x,j_dot.y),ctx.lineWidth=1.1,ctx.stroke(),ctx.closePath());var dot1,dot2,color1,color2,r,g,b}(),requestAnimationFrame(animateDots)})})}catch(e){}