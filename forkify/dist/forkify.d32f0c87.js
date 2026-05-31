function t(t){return t&&t.__esModule?t.default:t}let i=async function(t){try{let i=fetch(t),e=await Promise.race([i,new Promise(function(t,i){setTimeout(function(){i(Error("Request took too long! Timeout after 5 second"))},5e3)})]);if(!e.ok)throw Error(`Recipe request failed (${e.status})`);return await e.json()}catch(t){throw t}},e={recipe:{}},n=async function(t){try{let n=await i(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`);if(!n?.data?.recipe)throw Error("Recipe data is missing");let{recipe:s}=n.data;e.recipe={id:s.id,title:s.title,publisher:s.publisher,sourceUrl:s.source_url,image:s.image_url,servings:s.servings,cookTime:s.cooking_time,ingredients:s.ingredients},console.log(e.recipe)}catch(t){throw console.log(`${t} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),t}};var s={};s=import.meta.resolve("eyyUD");var r={};!function(){function t(){return Error("Parameters must be integer")}function i(){return Error("Invalid argument")}function e(){return Error("Division by Zero")}function n(n,r){var o=l,u=f;let c=f;if(null!=n)if(void 0!==r){if("bigint"==typeof n)o=n;else{if(isNaN(n))throw i();if(0!=n%1)throw t();o=BigInt(n)}if("bigint"==typeof r)u=r;else{if(isNaN(r))throw i();if(0!=r%1)throw t();u=BigInt(r)}c=o*u}else if("object"==typeof n){if("d"in n&&"n"in n)o=BigInt(n.n),u=BigInt(n.d),"s"in n&&(o*=BigInt(n.s));else if(0 in n)o=BigInt(n[0]),1 in n&&(u=BigInt(n[1]));else if("bigint"==typeof n)o=n;else throw i();c=o*u}else if("number"==typeof n){if(isNaN(n))throw i();if(0>n&&(c=-f,n=-n),0==n%1)o=BigInt(n);else{r=1;var a=0,h=1,d=1;let t=1;for(1<=n&&(r=10**Math.floor(1+Math.log10(n)),n/=r);1e7>=h&&1e7>=t;)if(n===(u=(a+d)/(h+t))){1e7>=h+t?(o=a+d,u=h+t):t>h?(o=d,u=t):(o=a,u=h);break}else n>u?(a+=d,h+=t):(d+=a,t+=h),1e7<h?(o=d,u=t):(o=a,u=h);o=BigInt(o)*BigInt(r),u=BigInt(u)}}else if("string"==typeof n){if(u=0,a=r=o=l,h=d=f,null===(n=n.replace(/_/g,"").match(/\d+|./g)))throw i();if("-"===n[u]?(c=-f,u++):"+"===n[u]&&u++,n.length===u+1?r=s(n[u++],c):"."===n[u+1]||"."===n[u]?("."!==n[u]&&(o=s(n[u++],c)),(++u+1===n.length||"("===n[u+1]&&")"===n[u+3]||"'"===n[u+1]&&"'"===n[u+3])&&(r=s(n[u],c),d=v**BigInt(n[u].length),u++),("("===n[u]&&")"===n[u+2]||"'"===n[u]&&"'"===n[u+2])&&(a=s(n[u+1],c),h=v**BigInt(n[u+1].length)-f,u+=3)):"/"===n[u+1]||":"===n[u+1]?(r=s(n[u],c),d=s(n[u+2],f),u+=3):"/"===n[u+3]&&" "===n[u+1]&&(o=s(n[u],c),r=s(n[u+2],c),d=s(n[u+4],f),u+=5),n.length<=u)c=o=a+(u=d*h)*o+h*r;else throw i()}else if("bigint"==typeof n)c=o=n,u=f;else throw i();if(u===l)throw e();_.s=c<l?-f:f,_.n=o<l?-o:o,_.d=u<l?-u:u}function s(t,e){try{t=BigInt(t)}catch(t){throw i()}return t*e}function o(t){return"bigint"==typeof t?t:Math.floor(t)}function u(t,i){if(i===l)throw e();let n=Object.create(h.prototype);n.s=t<l?-f:f;let s=a(t=t<l?-t:t,i);return n.n=t/s,n.d=i/s,n}function c(t){let i=Object.create(null);if(t<=f)return i[t]=f,i;for(;t%d===l;)i[d]=(i[d]||l)+f,t/=d;for(;t%g===l;)i[g]=(i[g]||l)+f,t/=g;for(;t%p===l;)i[p]=(i[p]||l)+f,t/=p;for(let e=0,n=d+p;n*n<=t;){for(;t%n===l;)i[n]=(i[n]||l)+f,t/=n;n+=b[e],e=e+1&7}return t>f&&(i[t]=(i[t]||l)+f),i}function a(t,i){if(!t)return i;if(!i)return t;for(;;){if(!(t%=i))return i;if(!(i%=t))return t}}function h(t,i){if(n(t,i),!(this instanceof h))return u(_.s*_.n,_.d);t=a(_.d,_.n),this.s=_.s,this.n=_.n/t,this.d=_.d/t}"u"<typeof BigInt&&(BigInt=function(t){if(isNaN(t))throw Error("");return t});let l=BigInt(0),f=BigInt(1),d=BigInt(2),g=BigInt(3),p=BigInt(5),v=BigInt(10),_={s:f,n:l,d:f},b=[d*d,d,d*d,d,d*d,d*g,d,d*g];h.prototype={s:f,n:l,d:f,abs:function(){return u(this.n,this.d)},neg:function(){return u(-this.s*this.n,this.d)},add:function(t,i){return n(t,i),u(this.s*this.n*_.d+_.s*this.d*_.n,this.d*_.d)},sub:function(t,i){return n(t,i),u(this.s*this.n*_.d-_.s*this.d*_.n,this.d*_.d)},mul:function(t,i){return n(t,i),u(this.s*_.s*this.n*_.n,this.d*_.d)},div:function(t,i){return n(t,i),u(this.s*_.s*this.n*_.d,this.d*_.n)},clone:function(){return u(this.s*this.n,this.d)},mod:function(t,i){if(void 0===t)return u(this.s*this.n%this.d,f);if(n(t,i),l===_.n*this.d)throw e();return u(this.s*_.d*this.n%(_.n*this.d),_.d*this.d)},gcd:function(t,i){return n(t,i),u(a(_.n,this.n)*a(_.d,this.d),_.d*this.d)},lcm:function(t,i){return n(t,i),_.n===l&&this.n===l?u(l,f):u(_.n*this.n,a(_.n,this.n)*a(_.d,this.d))},inverse:function(){return u(this.s*this.d,this.n)},pow:function(t,i){if(n(t,i),_.d===f)return _.s<l?u((this.s*this.d)**_.n,this.n**_.n):u((this.s*this.n)**_.n,this.d**_.n);if(this.s<l)return null;t=c(this.n),i=c(this.d);let e=f,s=f;for(let i in t)if("1"!==i){if("0"===i){e=l;break}if(t[i]*=_.n,t[i]%_.d!==l)return null;t[i]/=_.d,e*=BigInt(i)**t[i]}for(let t in i)if("1"!==t){if(i[t]*=_.n,i[t]%_.d!==l)return null;i[t]/=_.d,s*=BigInt(t)**i[t]}return _.s<l?u(s,e):u(e,s)},log:function(t,i){if(n(t,i),this.s<=l||_.s<=l)return null;var e=Object.create(null);t=c(_.n);let s=c(_.d);i=c(this.n);let r=c(this.d);for(var o in s)t[o]=(t[o]||l)-s[o];for(var h in r)i[h]=(i[h]||l)-r[h];for(var f in t)"1"!==f&&(e[f]=!0);for(var d in i)"1"!==d&&(e[d]=!0);for(let n in h=o=null,e)if(f=t[n]||l,e=i[n]||l,f===l){if(e!==l)return null}else if(d=a(e,f),e/=d,f/=d,null===o&&null===h)o=e,h=f;else if(e*h!=o*f)return null;return null!==o&&null!==h?u(o,h):null},equals:function(t,i){return n(t,i),this.s*this.n*_.d==_.s*_.n*this.d},lt:function(t,i){return n(t,i),this.s*this.n*_.d<_.s*_.n*this.d},lte:function(t,i){return n(t,i),this.s*this.n*_.d<=_.s*_.n*this.d},gt:function(t,i){return n(t,i),this.s*this.n*_.d>_.s*_.n*this.d},gte:function(t,i){return n(t,i),this.s*this.n*_.d>=_.s*_.n*this.d},compare:function(t,i){return n(t,i),(l<(t=this.s*this.n*_.d-_.s*_.n*this.d))-(t<l)},ceil:function(t){return t=v**BigInt(t||0),u(o(this.s*t*this.n/this.d)+(t*this.n%this.d>l&&this.s>=l?f:l),t)},floor:function(t){return t=v**BigInt(t||0),u(o(this.s*t*this.n/this.d)-(t*this.n%this.d>l&&this.s<l?f:l),t)},round:function(t){return t=v**BigInt(t||0),u(o(this.s*t*this.n/this.d)+this.s*((this.s>=l?f:l)+t*this.n%this.d*d>this.d?f:l),t)},roundTo:function(t,i){n(t,i);var e=this.n*_.d;return i=e%(t=this.d*_.n),e=o(e/t),i+i>=t&&e++,u(this.s*e*_.n,_.d)},divisible:function(t,i){return n(t,i),_.n!==l&&this.n*_.d%(_.n*this.d)===l},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(t=15){let i=this.n,e=this.d;t:{for(n=e;n%d===l;n/=d);for(;n%p===l;n/=p);if(n===f)n=l;else{for(var n,s=v%n,r=1;s!==f;r++)if(s=s*v%n,2e3<r){n=l;break t}n=BigInt(r)}}t:{s=f,r=v;var u=n;let t=f;for(;u>l;r=r*r%e,u>>=f)u&f&&(t=t*r%e);for(r=t,u=0;300>u;u++){if(s===r){s=BigInt(u);break t}s=s*v%e,r=r*v%e}s=0}if(r=s,s=(this.s<l?"-":"")+o(i/e),(i=i%e*v)&&(s+="."),n){for(t=r;t--;)s+=o(i/e),i%=e,i*=v;for(s+="(",t=n;t--;)s+=o(i/e),i%=e,i*=v;s+=")"}else for(;i&&t--;)s+=o(i/e),i%=e,i*=v;return s},toFraction:function(t=!1){let i=this.n,e=this.d,n=this.s<l?"-":"";if(e===f)n+=i;else{let s=o(i/e);t&&s>l&&(n+=s,n+=" ",i%=e),n=n+i+"/"+e}return n},toLatex:function(t=!1){let i=this.n,e=this.d,n=this.s<l?"-":"";if(e===f)n+=i;else{let s=o(i/e);t&&s>l&&(n+=s,i%=e),n=n+"\\frac{"+i+"}{"+e+"}"}return n},toContinued:function(){let t=this.n,i=this.d,e=[];for(;i;){e.push(o(t/i));let n=t%i;t=i,i=n}return e},simplify:function(t=.001){t=BigInt(Math.ceil(1/t));let i=this.abs(),e=i.toContinued();for(let s=1;s<e.length;s++){let r=u(e[s-1],f);for(var n=s-2;0<=n;n--)r=r.inverse().add(e[n]);if((n=r.sub(i)).n*t<n.d)return r.mul(this.s)}return this}},"function"==typeof define&&define.amd?define([],function(){return h}):(Object.defineProperty(h,"__esModule",{value:!0}),h.default=h,h.Fraction=h,r=h)}();class o{#t=document.querySelector(".recipe");#i;render(t){this.#i=t;let i=this.#e();this.#n(),this.#t.insertAdjacentHTML("afterbegin",i)}renderSpinner(){let i=`
			<div class="spinner">
				<svg>
					<use href="${t(s)}#icon-loader"></use>
				</svg>
			</div>
		`;this.#n(),this.#t.insertAdjacentHTML("afterbegin",i)}#n(){this.#t.innerHTML=""}#e(){return`
			<figure class="recipe__fig">
				<img src="${this.#i.image}" alt="Tomato" class="recipe__img" />

				<h1 class="recipe__title">
					<span>${this.#i.title}</span>
				</h1>
			</figure>

			<div class="recipe__details">
				<div class="recipe__info">
					<svg class="recipe__info-icon">
						<use href="${t(s)}#icon-clock"></use>
					</svg>

					<span class="recipe__info-data recipe__info-data--minutes">
						${this.#i.cookTime}
					</span>

					<span class="recipe__info-text">minutes</span>
				</div>

				<div class="recipe__info">
					<svg class="recipe__info-icon">
						<use href="${t(s)}#icon-users"></use>
					</svg>

					<span class="recipe__info-data recipe__info-data--people">
						${this.#i.servings}
					</span>

					<span class="recipe__info-text">servings</span>

					<div class="recipe__info-buttons">
						<button class="btn--tiny btn--increase-servings">
							<svg>
								<use href="${t(s)}#icon-minus-circle"></use>
							</svg>
						</button>

						<button class="btn--tiny btn--increase-servings">
							<svg>
								<use href="${t(s)}#icon-plus-circle"></use>
							</svg>
						</button>
					</div>
				</div>

				<div class="recipe__user-generated">
					<svg>
						<use href="${t(s)}#icon-user"></use>
					</svg>
				</div>

				<button class="btn--round">
					<svg>
						<use href="${t(s)}#icon-bookmark-fill"></use>
					</svg>
				</button>
			</div>

			<div class="recipe__ingredients">
				<h2 class="heading--2">Recipe ingredients</h2>

				<ul class="recipe__ingredient-list">
					${this.#i.ingredients.map(i=>{let e;return`
								<li class="recipe__ingredient">
									<svg class="recipe__icon">
										<use href="${t(s)}#icon-check"></use>
									</svg>

									<div class="recipe__quantity">
										${(e=i.quantity)?new(t(r))(e).toFraction(!0):""}
									</div>

									<div class="recipe__description">
										<span class="recipe__unit">
											${i.unit}
										</span>

										${i.description}
									</div>
								</li>
							`}).join("")}
				</ul>
			</div>

			<div class="recipe__directions">
				<h2 class="heading--2">How to cook it</h2>

				<p class="recipe__directions-text">
					This recipe was carefully designed and tested by
					<span class="recipe__publisher">
						${this.#i.publisher}
					</span>.
					Please check out directions at their website.
				</p>

				<a
					class="btn--small recipe__btn"
					href="${this.#i.sourceUrl}"
					target="_blank"
				>
					<span>Directions</span>

					<svg class="search__icon">
						<use href="${t(s)}#icon-arrow-right"></use>
					</svg>
				</a>
			</div>
		`}}var u=new o;let c=async function(){try{let t=window.location.hash.slice(1);if(!t||"undefined"===t||"null"===t)return;u.renderSpinner(),await n(t),u.render(e.recipe)}catch(t){}};["hashchange","load"].forEach(t=>window.addEventListener(t,c));
//# sourceMappingURL=forkify.d32f0c87.js.map
