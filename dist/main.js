(()=>{"use strict";document.querySelector("#mainpic"),document.querySelector("#content").setAttribute("id","mainpic"),function(){const t=document.querySelector("#mainpic"),e=document.createElement("div"),n=document.createElement("h1");n.innerHTML="Get 20% off your first two orders with code 20OFF2NOW",e.setAttribute("id","advertisement"),e.appendChild(n),t.appendChild(e)}(),function(){const t=document.createElement("div");t.setAttribute("class","background"),document.querySelector("#mainpic").appendChild(t)}(),function(){const t=document.createElement("div");t.setAttribute("class","heading"),document.querySelector(".background").appendChild(t)}(),function(){const t=document.querySelector(".heading"),e=document.createElement("h1"),n=document.createElement("h2");n.innerHTML="a subscription service for strange fruits. ",e.innerHTML='<i class="far fa-lemon"></i> Strange Roots <br>',e.setAttribute("id","title"),n.setAttribute("id","subtitle"),e.appendChild(n),t.appendChild(e)}(),function(){const t=document.querySelector(".background"),e=document.createElement("button");e.setAttribute("class","home"),t.appendChild(e);const n=document.createElement("div");t.appendChild(n);const i=document.createElement("h2");i.innerHTML="home",e.appendChild(i);const o=document.createElement("button");o.setAttribute("class","menu"),t.appendChild(o);const r=document.createElement("h2");r.innerHTML="menu",o.appendChild(r);const c=document.createElement("button");c.setAttribute("class","contact"),t.appendChild(c);const d=document.createElement("h2");d.innerHTML="contact",c.appendChild(d);const a=document.createElement("div"),s=document.createElement("h2");s.innerHTML='<i class="fab fa-instagram"></i>&nbsp  <i class="fab fa-twitter"></i>  <i class="fab fa-youtube"></i>',a.appendChild(s),n.appendChild(a),s.setAttribute("id","socialh2"),a.setAttribute("id","socialcontainer"),n.setAttribute("id","navcontainer"),n.appendChild(e),n.appendChild(o),n.appendChild(c),n.appendChild(a)}(),function(){const t=document.querySelector("#mainpic"),e=document.createElement("div");e.innerHTML="Try Your First Month Free!",e.setAttribute("id","tryDiv"),t.appendChild(e);const n=document.createElement("button");n.innerHTML="Try Now",n.setAttribute("id","tryBtn"),e.appendChild(n)}(),function(){const t=document.querySelector("#mainpic"),e=document.createElement("div");e.innerHTML='Tired of spending loot <br> on same ol\' fruit? <br>Try <span id = "strange">Strange Roots</span> <br> <i class="lemon fas fa-lemon"></i>',e.setAttribute("id","infoDiv"),t.appendChild(e)}(),function(){const t=document.createElement("div"),e=document.querySelector("#mainpic");t.innerHTML='<input type="text" id="formInput" placeholder="Enter Email"> <h2 id="signup">Sign Up for our weekly newsletter, get 10% off your first order.</h2> <br> <button type ="button" id ="email">Sign Up</button>',t.setAttribute("id","form"),e.appendChild(t)}(),function(){const t=document.querySelector("#mainpic"),e=document.createElement("div");e.setAttribute("id","footer"),e.innerHTML='Copyright (not really) © 2021 Sam Tamburri  <button id ="githubBtn"><i class="fab fa-github"></i></btn>',t.appendChild(e)}();const t=document.querySelector(".home"),e=document.querySelector(".contact"),n=document.querySelector(".menu");t.addEventListener("click",(function(){location.reload()})),n.addEventListener("click",(function(){t.style.textDecoration="none",n.style.textDecoration="overline solid",e.style.textDecoration&&(e.style.textDecoration="none",document.querySelector("#overdiv").style.display="none"),n.disabled=!0,e.disabled=!1,function(){const t=document.querySelector("#mainpic"),e=document.createElement("div"),n=document.querySelector("#infoDiv"),i=document.querySelector("#tryDiv"),o=document.querySelector("#form");e.setAttribute("id","bigDiv"),t.appendChild(e),n.style.display="none",i.style.display="none",o.style.display="none"}(),function(){const t=document.querySelector("#bigDiv"),e=document.createElement("div");e.setAttribute("id","menuBackground"),t.appendChild(e);const n=document.createElement("div");n.setAttribute("class","foodDivs"),n.innerHTML='<h2 class ="mango">Mango $100/lb <button class="btn1"><i class="fas fa-shopping-cart"></i> Add to Cart</button><br>Starfruit $100/lb <button class="btn1"><i class="fas fa-shopping-cart"></i> Add to Cart</button> <br> Passionfruit $100/lb <button class="btn1"><i class="fas fa-shopping-cart"></i> Add to Cart</button> <br> Jackfruit $100/lb <button class="btn1"><i class="fas fa-shopping-cart"></i> Add to Cart</button> <br> Durian $100/lb <button class="btn1"><i class="fas fa-shopping-cart"></i> Add to Cart</button> <br> Rambutan $100/lb <button class="btn1"><i class="fas fa-shopping-cart"></i> Add to Cart</button> <br> ';const i=document.createElement("div");i.setAttribute("class","halfDiv"),i.innerHTML='<div id="mangos">m</div>\n  <div id="starfruit">s</div> <div id="passion">p</div> <div id="jackfruit">j</div> <div id="durian">d</div> <div id="rambutan">r</div>',e.appendChild(i),e.appendChild(n)}()})),e.addEventListener("click",(function(){t.style.textDecoration="none",e.style.textDecoration="overline solid",n.style.textDecoration&&(n.style.textDecoration="none",document.querySelector("#menuBackground").style.display="none"),e.disabled=!0,n.disabled=!1,function(){const t=document.querySelector("#mainpic"),e=document.createElement("div"),n=document.querySelector("#infoDiv"),i=document.querySelector("#tryDiv"),o=document.querySelector("#form");e.setAttribute("id","overdiv"),t.appendChild(e),n.style.display="none",i.style.display="none",o.style.display="none"}(),function(){const t=document.createElement("div"),e=document.querySelector("#overdiv");t.setAttribute("id","overlay"),e.appendChild(t),t.innerHTML='Phone: 555-999-2394 <br> Email: StrangeRoots@tamburri.com <br> HR Office: 153 Johnson Ave, Brooklyn, NY 11206 <br><div style="width: 100%"><iframe width="100%" height="380" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=123%20Graham%20Ave,%20Brooklyn%20NY%2011206+(Strange%20Roots)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.maps.ie/route-planner.htm">Driving Route Planner</a></div>'}()})),document.getElementById("githubBtn").onclick=function(){window.open("https://github.com/TamburriSam","_blank")}})();