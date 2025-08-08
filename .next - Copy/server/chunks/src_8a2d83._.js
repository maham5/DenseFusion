module.exports = {

"[project]/src/helpers/change-casing.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "kebabToTitleCase": ()=>kebabToTitleCase,
    "snakeToTitleCase": ()=>snakeToTitleCase,
    "toSentenceCase": ()=>toSentenceCase
});
const snakeToTitleCase = (value)=>{
    return value.split("_").filter((x)=>x.length > 0).map((x)=>x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
};
const kebabToTitleCase = (value)=>{
    return value.split("-").filter((x)=>x.length > 0).map((x)=>x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
};
const toSentenceCase = (value)=>{
    return value.charAt(0).toUpperCase() + value.slice(1);
};

})()),
"[project]/src/helpers/index.js [app-ssr] (ecmascript) {locals}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/src/helpers/index.js [app-ssr] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$change$2d$casing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/change-casing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/src/helpers/index.js [app-ssr] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/src/utils/cn.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "cn": ()=>cn
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function cn(...inputs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"](inputs));
}

})()),
"[project]/src/utils/index.js [app-ssr] (ecmascript) {locals}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;

})()),
"[project]/src/utils/index.js [app-ssr] (ecmascript) {module evaluation}": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/cn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/src/utils/index.js [app-ssr] (ecmascript) {locals}");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/src/assets/data.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "footerLinks": ()=>footerLinks,
    "landingPages": ()=>landingPages
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lu/index.mjs [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const footerLinks = [
    {
        title: "Company",
        items: [
            {
                name: "About Us"
            },
            {
                name: "Services"
            },
            {
                name: "Industries"
            },
            {
                name: "Products"
            },
            {
                name: "Contact Us"
            }
        ]
    },
    {
        title: "Social Media",
        items: [
            {
                name: "Facebook",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuFacebook"]
            },
            {
                name: "Instagram",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuInstagram"]
            },
            {
                name: "Twitter",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuTwitter"]
            },
            {
                name: "Linkedin",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuLinkedin"]
            }
        ]
    },
    {
        title: "Legal & Press",
        items: [
            {
                name: "Privacy Policy"
            },
            {
                name: "Terms & Conditions"
            },
            {
                name: "Presskit"
            }
        ]
    }
];
const landingPages = [
    {
        name: "Agency",
        link: "/landing/agency"
    },
    {
        name: "Agency Two",
        link: "/landing/agency-2"
    },
    {
        name: "Charity",
        link: "/landing/charity"
    },
    {
        name: "Company",
        link: "/landing/company"
    },
    {
        name: "Creative",
        link: "/landing/creative"
    },
    {
        name: "Ebook",
        link: "/landing/ebook"
    },
    {
        name: "Finance",
        link: "/landing/finance"
    },
    {
        name: "Hosting",
        link: "/landing/hosting"
    },
    {
        name: "Marketing",
        link: "/landing/marketing"
    },
    {
        name: "Marketing 2",
        link: "/landing/marketing-2"
    },
    {
        name: "Marketing 3",
        link: "/landing/marketing-3"
    },
    {
        name: "Photography",
        link: "/landing/photography"
    },
    {
        name: "Portfolio",
        link: "/landing/portfolio"
    },
    {
        name: "Portfolio 2",
        link: "/landing/portfolio-2"
    },
    {
        name: "Startup",
        link: "/landing/startup"
    },
    {
        name: "Web Designer",
        link: "/landing/web-designer"
    }
];

})()),
"[project]/src/assets/images/logo-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/logo-dark.3f7fcb2a.png");
})()),
"[project]/src/assets/images/logo-dark.png.mjs/(IMAGE)/[project]/src/assets/images/logo-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/logo-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 3341,
    height: 1381,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/ABYsHTpWkGm6NG9PnAQWDiQDGQ8pAhkPKQIZECsBCwcSADNhRYNyv5X+UKV+8BU3KVMqRTlULkk+Vy5LP1sRHBgkABApGzw3f1+8KGZNngwXEyAoJyciLy4uJy0sLSYQEBAOoj4W0uo1ZXYAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 3
};

})()),
"[project]/src/assets/images/logo-light.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/logo-light.3d7e71b6.png");
})()),
"[project]/src/assets/images/logo-light.png.mjs/(IMAGE)/[project]/src/assets/images/logo-light.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$light$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/logo-light.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$light$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 328,
    height: 89,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AD8/Pzg9PT01Nzc3LzkyLjRVJApTORUDNjMTAzIwEgItADU1NTBFRUU9Pz8/Nj87ODkvFgouShwER2IlBV8/GAM7nbkMMys+wHsAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 2
};

})()),
"[project]/src/components/TopNavBar.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/src/helpers/index.js [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$change$2d$casing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/helpers/change-casing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/src/utils/index.js [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/cn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lu/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/assets/data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/logo-dark.png.mjs/(IMAGE)/[project]/src/assets/images/logo-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$light$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$light$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/logo-light.png.mjs/(IMAGE)/[project]/src/assets/images/logo-light.png [app-ssr] (static) (structured image object, ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
;
;
const TopNavBar = ({ menuItems, position, hasDownloadButton })=>{
    const navbarRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const hash = window.location.hash;
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        document.addEventListener("scroll", (e)=>{
            e.preventDefault();
            activeSection();
            if (navbarRef.current) {
                if (window.scrollY >= 80) navbarRef.current.classList.add("nav-sticky");
                else navbarRef.current.classList.remove("nav-sticky");
            }
        });
        const timeout = setTimeout(()=>{
            if (hash) {
                const element = document.querySelector(hash);
                if (element) element.scrollIntoView({
                    behavior: "instant"
                });
            }
        }, 0);
        return ()=>{
            clearTimeout(timeout);
            window.removeEventListener("scroll", activeSection);
        };
    }, []);
    const [activation, setActivation] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](menuItems[0]);
    const activeSection = ()=>{
        const scrollY = window.scrollY;
        for(let i = menuItems.length - 1; i >= 0; i--){
            const section = menuItems[i];
            const el = document.getElementById(section);
            if (el && el.offsetTop <= scrollY + 100) {
                setActivation(section);
                return;
            }
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("header", {
                ref: navbarRef,
                id: "navbar",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"](position, "inset-x-0 top-0 z-[60] w-full  border-transparent bg-black transition-all duration-300 dark:bg-default-50 lg:bg-transparent [&.nav-sticky]:bg-black/90 [&.nav-sticky]:shadow-md [&.nav-sticky]:backdrop-blur-3xl dark:[&.nav-sticky]:bg-default-50/80"),
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex h-full items-center py-4 bg-black",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "container",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("nav", {
                            className: "flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex w-full items-center justify-between lg:w-auto",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                    alt: "logo",
                                                    height: 40,
                                                    width: 147,
                                                    className: "flex h-15 dark:hidden"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$light$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$light$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                    alt: "logo",
                                                    height: 40,
                                                    width: 137,
                                                    className: "hidden h-12 dark:flex"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/components/TopNavBar.jsx>",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                hasDownloadButton && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "inline-flex shrink gap-2 lg:hidden",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "",
                                                        className: "inline-flex items-center gap-2 rounded-full bg-[#28A76D] px-6 py-1.5 text-base text-white transition-all hover:bg-[#28A76D] ",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                            className: "hidden sm:block",
                                                            children: "Get Started"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                            lineNumber: 96,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                        lineNumber: 91,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                    className: "hs-collapse-toggle inline-block lg:hidden",
                                                    "data-hs-overlay": "#mobile-menu",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuMenu"], {
                                                        className: "h-7 w-7 text-default-600 hover:text-default-900"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/components/TopNavBar.jsx>",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/TopNavBar.jsx>",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                    className: "menu relative mx-auto hidden grow items-center justify-center lg:flex",
                                    children: [
                                        menuItems.map((item, idx)=>{
                                            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]("menu-item mx-2 text-white transition-all duration-300 hover:text-[#28A76D] s [&.active]:text-[#28A76D] ", activation === item && "active"),
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium capitalize lg:text-base",
                                                    href: `#${item}`,
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$change$2d$casing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSentenceCase"](item)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                    lineNumber: 118,
                                                    columnNumber: 23
                                                }, this)
                                            }, idx, false, {
                                                fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                lineNumber: 111,
                                                columnNumber: 21
                                            }, this);
                                        }),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                            className: "menu-item group",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "hs-dropdown relative inline-flex [--trigger:hover] [--placement:bottom]",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "hs-dropdown-menu z-10 mt-4 hidden min-w-48 rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                                        className: "flex flex-col gap-1",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["landingPages"].map((item, idx)=>{
                                                            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]("flex items-center rounded px-3 py-2 text-sm font-medium text-white transition-all hover:bg-default-400/10 hover:text-default-700 [&.active]:text-[#28A76D] ", pathname === item.link && "active"),
                                                                    href: item.link,
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                                    lineNumber: 140,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, idx, false, {
                                                                fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                                lineNumber: 139,
                                                                columnNumber: 29
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                        lineNumber: 136,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                    lineNumber: 135,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/TopNavBar.jsx>",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/TopNavBar.jsx>",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "ms-auto hidden shrink gap-2 lg:inline-flex",
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "",
                                        className: "inline-flex items-center gap-2 rounded-full bg-[#28A76D]  px-6 py-1.5 text-base text-white transition-all hover:bg-[#28A76D] ",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "hidden sm:block",
                                            children: "Get Started"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/TopNavBar.jsx>",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/TopNavBar.jsx>",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/TopNavBar.jsx>",
                                    lineNumber: 157,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/TopNavBar.jsx>",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/TopNavBar.jsx>",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/TopNavBar.jsx>",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/TopNavBar.jsx>",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                id: "mobile-menu",
                className: "hs-overlay fixed bottom-0 left-0 top-0 z-[61] hidden h-screen w-full max-w-[270px] -translate-x-full transform border-r border-default-200 bg-black transition-all [--body-scroll:true] [--overlay-backdrop:false] hs-overlay-open:translate-x-0 dark:bg-default-50",
                tabIndex: -1,
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-4 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                        alt: "logo",
                                        height: 40,
                                        width: 147,
                                        className: "flex h-10 dark:hidden"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/TopNavBar.jsx>",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$light$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$light$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                        alt: "logo",
                                        height: 40,
                                        width: 147,
                                        className: "hidden h-10 dark:flex"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/TopNavBar.jsx>",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/TopNavBar.jsx>",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                "data-hs-overlay": "#mobile-menu",
                                className: "hs-collapse-toggle",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuX"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/TopNavBar.jsx>",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/TopNavBar.jsx>",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/TopNavBar.jsx>",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "h-[calc(100%-4rem)] overflow-y-auto text-white",
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("nav", {
                            className: "hs-accordion-group flex h-full w-full flex-col flex-wrap p-4",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                className: "space-y-1",
                                children: [
                                    menuItems.map((item, idx)=>{
                                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]("rounded text-sm font-medium capitalize text-white transition-all duration-300 hover:bg-default-100 hover:text-[#28A76D]  [&.active]:bg-default-100 [&.active]:text-[#28A76D] ", activation == `${item}` && "active"),
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                className: "block w-full px-4 py-2.5",
                                                href: `#${item}`,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$change$2d$casing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toSentenceCase"](item)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                lineNumber: 210,
                                                columnNumber: 21
                                            }, this)
                                        }, idx, false, {
                                            fileName: "<[project]/src/components/TopNavBar.jsx>",
                                            lineNumber: 203,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                        className: "hs-accordion",
                                        id: "landing-accordion",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            id: "landing-accordion",
                                            className: "hs-accordion-content hidden w-full overflow-hidden transition-[height]",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                                className: "ps-2 pt-2",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["landingPages"].map((item, idx)=>{
                                                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]("flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700 [&.active]:text-primary", pathname === item.link && "active"),
                                                            href: item.link,
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                            lineNumber: 233,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, idx, false, {
                                                        fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                        lineNumber: 232,
                                                        columnNumber: 25
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/TopNavBar.jsx>",
                                                lineNumber: 229,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/TopNavBar.jsx>",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/TopNavBar.jsx>",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/TopNavBar.jsx>",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/TopNavBar.jsx>",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/TopNavBar.jsx>",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/TopNavBar.jsx>",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = TopNavBar;

})()),
"[project]/src/assets/images/avatars/img-1.jpg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/img-1.a9c53f5e.jpg");
})()),
"[project]/src/assets/images/avatars/img-1.jpg.mjs/(IMAGE)/[project]/src/assets/images/avatars/img-1.jpg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$1$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/avatars/img-1.jpg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$1$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 600,
    height: 600,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDV1LWgNct5FyscMhR3z94YAxj6nP4Uvarnv0N/Yvkt1P/Z",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/src/assets/images/avatars/img-2.jpg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/img-2.ba84a22d.jpg");
})()),
"[project]/src/assets/images/avatars/img-2.jpg.mjs/(IMAGE)/[project]/src/assets/images/avatars/img-2.jpg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$2$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/avatars/img-2.jpg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$2$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 600,
    height: 600,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDqLvxfDbeNYrR5ZFUXDQyEsfL2Fcg/UHFY8z5zfkXs/M//2Q==",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/src/assets/images/avatars/img-3.jpg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/img-3.fd584423.jpg");
})()),
"[project]/src/assets/images/avatars/img-3.jpg.mjs/(IMAGE)/[project]/src/assets/images/avatars/img-3.jpg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$3$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/avatars/img-3.jpg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$3$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 600,
    height: 600,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBV8YaEmoPcC4c75PKJLHAXH3gPSqu+fyCy9n5n/9k=",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/src/assets/images/landing/company/img-5.jpg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/img-5.92f795c6.jpg");
})()),
"[project]/src/assets/images/landing/company/img-5.jpg.mjs/(IMAGE)/[project]/src/assets/images/landing/company/img-5.jpg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$5$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/landing/company/img-5.jpg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$5$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1380,
    height: 920,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDg9W8UX160U7hVlCADaPlA47fhUlWsf//Z",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/landing/company/img-6.jpg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/img-6.5e20b2f6.jpg");
})()),
"[project]/src/assets/images/landing/company/img-6.jpg.mjs/(IMAGE)/[project]/src/assets/images/landing/company/img-6.jpg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$6$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/landing/company/img-6.jpg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$6$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1380,
    height: 920,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCLWfNtdGggaUzeVbhNzDsOR06dvyrlqLQ6abP/2Q==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/landing/company/img-7.jpg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/img-7.74229f26.jpg");
})()),
"[project]/src/assets/images/landing/company/img-7.jpg.mjs/(IMAGE)/[project]/src/assets/images/landing/company/img-7.jpg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$7$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/landing/company/img-7.jpg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$7$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1380,
    height: 920,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDoI/Pj12ORrhnV5UPl4wAelYO6aZtGzTVtj//Z",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/landing/company/img-8.jpg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/img-8.cc58d1d4.jpg");
})()),
"[project]/src/assets/images/landing/company/img-8.jpg.mjs/(IMAGE)/[project]/src/assets/images/landing/company/img-8.jpg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$8$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/landing/company/img-8.jpg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$8$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1380,
    height: 920,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwAt9Wv5bJ7+SfJkH3QuMHJ6H8f0rJSuaTiouyP/2Q==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/landing/company/img-9.jpg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/img-9.7b14e1fc.jpg");
})()),
"[project]/src/assets/images/landing/company/img-9.jpg.mjs/(IMAGE)/[project]/src/assets/images/landing/company/img-9.jpg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$9$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/landing/company/img-9.jpg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$9$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1380,
    height: 920,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDf0i/nm1yKNigVJGUhVxn/AAqFuN7XP//Z",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/landing/company/img-10.jpg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/img-10.d73e4b6f.jpg");
})()),
"[project]/src/assets/images/landing/company/img-10.jpg.mjs/(IMAGE)/[project]/src/assets/images/landing/company/img-10.jpg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$10$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/landing/company/img-10.jpg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$10$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1380,
    height: 920,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDIg1i/0zShLC8DPEVyWhB8wNnhvXGKb1A//9k=",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/app/landing/company/data.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "blogSlides": ()=>blogSlides,
    "faqContent": ()=>faqContent,
    "features": ()=>features,
    "services": ()=>services,
    "testimonialSlides": ()=>testimonialSlides
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lu/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$1$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$1$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/avatars/img-1.jpg.mjs/(IMAGE)/[project]/src/assets/images/avatars/img-1.jpg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$2$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$2$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/avatars/img-2.jpg.mjs/(IMAGE)/[project]/src/assets/images/avatars/img-2.jpg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$3$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$3$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/avatars/img-3.jpg.mjs/(IMAGE)/[project]/src/assets/images/avatars/img-3.jpg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$5$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$5$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/landing/company/img-5.jpg.mjs/(IMAGE)/[project]/src/assets/images/landing/company/img-5.jpg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$6$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$6$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/landing/company/img-6.jpg.mjs/(IMAGE)/[project]/src/assets/images/landing/company/img-6.jpg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$7$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$7$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/landing/company/img-7.jpg.mjs/(IMAGE)/[project]/src/assets/images/landing/company/img-7.jpg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$8$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$8$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/landing/company/img-8.jpg.mjs/(IMAGE)/[project]/src/assets/images/landing/company/img-8.jpg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$9$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$9$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/landing/company/img-9.jpg.mjs/(IMAGE)/[project]/src/assets/images/landing/company/img-9.jpg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$10$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$10$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/landing/company/img-10.jpg.mjs/(IMAGE)/[project]/src/assets/images/landing/company/img-10.jpg [app-ssr] (static) (structured image object, ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
const features = [
    {
        title: "Immediate Deployment",
        description: "Et vero eos et accusamus et iusto odio dignissimos",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuSettings"]
    },
    {
        title: "DOS Protection",
        description: "But I need to clarify how this erroneous concept is",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuAppWindow"]
    },
    {
        title: "Premium Support",
        description: "we disapprove of those who uphold righteous indignation.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuHeadphones"]
    }
];
const services = [
    {
        title: "Fuel Delivery",
        description: "Efficiently delivers diverse fuels (gasoline, diesel, propane, etc.) promptly to residential, commercial, or industrial sites.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuTruck"]
    },
    {
        title: "Fuel Storage Solutions",
        description: "Supplying secure fuel storage solutions with tanks or containers, ensuring adherence to safety standards and regulations.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuDatabase"]
    },
    {
        title: "Equipment Maintenanceegies",
        description: "Providing maintenance for fuel-related equipment like pumps, tanks, and generators to ensure safety compliance and functionality.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuCodesandbox"]
    }
];
const faqContent = [
    {
        title: "How Do You Address My Concepts?",
        description: "It can increase brand visibility, drive website traffic, generate leads, and ultimately boost sales and revenue."
    },
    {
        title: "In Which Industries Do You Have Expertise?",
        description: "We work with businesses of various budgets and can create strategies that align with your financial resources while delivering meaningful results."
    },
    {
        title: "How Do You Approach My Ideas?",
        description: "provides a comprehensive range of digital services, including website design and development, digital marketing, search engine optimization"
    }
];
const testimonialSlides = [
    {
        name: "Enagol Ame",
        location: "Brazil",
        description: "We' ve been utilizing Vault for the past five years. Vault is exceptional. It goes without saying that we are incredibly content with the outcomes. Training was not even necessary.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$1$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$1$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        name: "Rashed ka.",
        location: "Italy",
        description: "Setting up was incredibly straightforward. I had no prior experience with hosting, but Vault has made everything appear easy.",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$2$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$2$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        name: "Jackma Kalin",
        location: "USA",
        description: "Vault is the next game-changing application. I'm at a loss for words. I'll definitely inform my mom about this; she could benefit greatly from using Vault!",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$3$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$avatars$2f$img$2d$3$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    }
];
const blogSlides = [
    {
        description: "10 Easy Habits to Enhance Your Daily Progress by 1%",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$5$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$5$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        description: "5 Mind-Blowing Applications of Artificial Intelligence",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$6$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$6$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        description: "This Highly Anticipated Technology Could Finally Transform the World",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$7$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$7$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        description: "Design Thinking: Crafting a Design System for an Established Product",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$8$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$8$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        description: "If You Possess Self-Discipline, Begin Cultivating These 4 Habits Now",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$9$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$9$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        description: "This Highly Anticipated Technology Could Finally Transform the World",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$10$2e$jpg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$landing$2f$company$2f$img$2d$10$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    }
];
;

})()),
"[project]/src/app/landing/agency/components/Hero.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lu/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$company$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/landing/company/data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
const Hero = ()=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
        id: "home",
        className: "relative overflow-hidden bg-black  py-24 lg:py-40",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "container",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mb-10 grid grid-cols-1 items-center gap-x-6 gap-y-12 lg:grid-cols-2",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "max-w-xl",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "inline-block rounded-full border border-[#28A76D]/40 pe-5",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#28A76D]/40",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuBell"], {
                                                className: "h-4 w-4 text-default-950 text-white/70"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                                lineNumber: 19,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                            lineNumber: 18,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "text-xs font-medium text-white/70 md:text-sm",
                                            children: "Applied Supercomputing for Industry Transformation"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                            lineNumber: 21,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                    lineNumber: 17,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                className: "my-4 max-w-lg text-4xl font-medium  text-white/70 md:text-4xl/tight",
                                children: "Supercomputing, Tailored for Your Industries"
                            }, void 0, false, {
                                fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "md:text-lg text-white/50",
                                children: "At DenseFusion, we specialize in applied supercomputing. From healthcare and finance to climate science and manufacturing, we gather domain-specific requirements and deliver high-performance computing infrastructure—on-premise or in the cloud—optimized for your business needs. sodales."
                            }, void 0, false, {
                                fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "inline-block",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "",
                                    className: "mt-6 flex items-center justify-center gap-2 rounded-md bg-[#28A76D] px-6 py-2 text-base font-medium text-white transition-all duration-500 hover:bg-[#1c4432]",
                                    children: "Get started now"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "grid gap-6 lg:grid-cols-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$landing$2f$company$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["features"].map((feature, idx)=>{
                        const Icon = feature.icon;
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "rounded-xl border mt-20 border-[#28A76D]/40 bg-black p-6 text-center sm:text-start",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:justify-start sm:gap-0",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "sm:pe-5",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Icon, {
                                            className: "mx-auto h-10 w-10 text-white/50"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                            lineNumber: 58,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                        lineNumber: 57,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "border-[#28A76D]/20 sm:border-s sm:ps-5",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                                className: "text-xl font-medium text-white/50",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                                lineNumber: 61,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "mt-3 text-base text-white/50",
                                                children: feature.description
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                                lineNumber: 64,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                        lineNumber: 60,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                                lineNumber: 56,
                                columnNumber: 17
                            }, this)
                        }, idx, false, {
                            fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                            lineNumber: 52,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/landing/agency/components/Hero.jsx>",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Hero;

})()),
"[project]/src/components/ProjectSwiper.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__FreeMode$7d$__ = __turbopack_import__("[project]/node_modules/swiper/modules/free-mode.mjs [app-ssr] (ecmascript) {export default as FreeMode}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$thumbs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Thumbs$7d$__ = __turbopack_import__("[project]/node_modules/swiper/modules/thumbs.mjs [app-ssr] (ecmascript) {export default as Thumbs}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/src/utils/index.js [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/cn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
const ProjectSwiper = ({ slides, bgBlack })=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
        modules: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$thumbs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__Thumbs$7d$__["Thumbs"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__FreeMode$7d$__["FreeMode"]
        ],
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
        breakpoints: {
            400: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        },
        className: "relative rounded-md",
        children: slides.map((slide, idx)=>{
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "group relative overflow-hidden rounded-3xl",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            alt: "slide-image",
                            src: slide.image,
                            className: "h-full w-full"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/ProjectSwiper.jsx>",
                            lineNumber: 34,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"]("absolute inset-0", bgBlack && "bg-black/40")
                        }, void 0, false, {
                            fileName: "<[project]/src/components/ProjectSwiper.jsx>",
                            lineNumber: 39,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "absolute inset-x-0 top-1/2 opacity-0 transition-all duration-700 group-hover:opacity-100",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h5", {
                                        className: "mb-1 inline-block bg-black px-3 py-1 text-xl font-medium text-white",
                                        children: slide.title
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/ProjectSwiper.jsx>",
                                        lineNumber: 44,
                                        columnNumber: 19
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("br", {}, void 0, false, {
                                        fileName: "<[project]/src/components/ProjectSwiper.jsx>",
                                        lineNumber: 47,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                        className: "inline-block bg-black px-3 py-1 text-2xl font-medium text-white",
                                        children: slide.subTitle
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/ProjectSwiper.jsx>",
                                        lineNumber: 48,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/ProjectSwiper.jsx>",
                                lineNumber: 43,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/ProjectSwiper.jsx>",
                            lineNumber: 42,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/ProjectSwiper.jsx>",
                    lineNumber: 33,
                    columnNumber: 13
                }, this)
            }, idx, false, {
                fileName: "<[project]/src/components/ProjectSwiper.jsx>",
                lineNumber: 32,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "<[project]/src/components/ProjectSwiper.jsx>",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ProjectSwiper;

})()),
"[project]/src/assets/images/demo/logo/tailwindcss.svg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/tailwindcss.9e9a04b0.svg");
})()),
"[project]/src/assets/images/demo/logo/tailwindcss.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/tailwindcss.svg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$tailwindcss$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/tailwindcss.svg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$tailwindcss$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 54,
    height: 33,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};

})()),
"[project]/src/assets/images/demo/logo/html.svg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/html.069ec9dd.svg");
})()),
"[project]/src/assets/images/demo/logo/html.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/html.svg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$html$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/html.svg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$html$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 27,
    height: 27,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};

})()),
"[project]/src/assets/images/demo/logo/css.svg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/css.000df3af.svg");
})()),
"[project]/src/assets/images/demo/logo/css.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/css.svg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$css$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/css.svg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$css$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 24,
    height: 27,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};

})()),
"[project]/src/assets/images/demo/logo/javascript.svg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/javascript.67988200.svg");
})()),
"[project]/src/assets/images/demo/logo/javascript.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/javascript.svg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$javascript$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/javascript.svg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$javascript$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 630,
    height: 630,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};

})()),
"[project]/src/assets/images/demo/logo/bun.svg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/bun.367e98c2.svg");
})()),
"[project]/src/assets/images/demo/logo/bun.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/bun.svg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$bun$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/bun.svg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$bun$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 80,
    height: 70,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};

})()),
"[project]/src/assets/images/demo/logo/yarn.svg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/yarn.665c6718.svg");
})()),
"[project]/src/assets/images/demo/logo/yarn.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/yarn.svg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$yarn$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/yarn.svg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$yarn$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 800,
    height: 800,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};

})()),
"[project]/src/assets/images/demo/logo/vitejs-logo.svg [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/vitejs-logo.ae70e904.svg");
})()),
"[project]/src/assets/images/demo/logo/vitejs-logo.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/vitejs-logo.svg [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$vitejs$2d$logo$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/vitejs-logo.svg [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$vitejs$2d$logo$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 410,
    height: 404,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};

})()),
"[project]/src/assets/images/demo/agency.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/agency.03e2dd20.png");
})()),
"[project]/src/assets/images/demo/agency.png.mjs/(IMAGE)/[project]/src/assets/images/demo/agency.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/agency.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AP39/f78+/f397W2ube4urW2up2Sj5ONjAD8/Pz09PTw8PGoqaubm56TkpZranA3QlAA9/f34+Pk5+fovL2+jouLgHl5ZnB+EiU2AP39/vv7+/Hx8ZeYmHVzdl5fZUdMVCMxQAD19fb39/fv7+/Gxse5ur2tr7KYmp2UmJw9aFNzxz70bwAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/agency-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/agency-dark.b58cfb8f.png");
})()),
"[project]/src/assets/images/demo/agency-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/agency-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/agency-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ABgXGhkXGR4eIVdYXHR1eHBxdWVaV1RPTQAYGBsZGRwdHSBfYGObm56TkpZranA3QlAAGRkcHR0fGBgaRUZHjouLgHl5ZXB+EiU2ABgYGhYWGBkZG1pbXHRzdl5fZEdMVB8tOwAhISQfHyImJihPT1FZWl5ISk41NzsqLjMJFCAnX+AGZwAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/agency-2.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/agency-2.2270c32c.png");
})()),
"[project]/src/assets/images/demo/agency-2.png.mjs/(IMAGE)/[project]/src/assets/images/demo/agency-2.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/agency-2.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAbUlEQVR42lWNOwrDMBBEdeucJG1ukAvkAOlNiJFrY+xCoBXYRp+dXa9KTzU83jAOYHATEXBPLztJOV3OOYRAREZN4rKDq4q4lJL3PsZolObf+H2s00dadWi1nAcAVd2W5f16/oehL/Qe8+zGygXn7HG/tdu4wAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/agency-2-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/agency-2-dark.9c51fa8b.png");
})()),
"[project]/src/assets/images/demo/agency-2-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/agency-2-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/agency-2-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAdUlEQVR42j2MQQrCMBBFcwozP5NJq8TEARFx4aZ0qV5ALyD0BL1Cj9ADd0qh8BZ/8f5zRAEU/AFEbHiPzEiAS+moei1FmROznFqJLEB0Odeu62tVkeb/e8/Tcxw+l3NxMcRWGlOso1W/r/5xuwd7bOkd84B1LA/yEP66pYpqAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/charity.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/charity.5a787f0f.png");
})()),
"[project]/src/assets/images/demo/charity.png.mjs/(IMAGE)/[project]/src/assets/images/demo/charity.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$charity$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/charity.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$charity$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/APX19fb09Pf3+Pb29vXy8e62meSUau2ZbgDx8fLr6+zr6+zu7u/U1dO1inWMZ1bPdEUA6Ojq1NPV4ODh5+fomZGPj3JklnJf03VEAPHq5u7f2PLy8+zs7aGbmZR1ZohkUc5wQAD08/Pw7+/w8PLu7vDk4eDbpYrShmDldz85Wlt8HLaJ8AAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/charity-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/charity-dark.d40d7d47.png");
})()),
"[project]/src/assets/images/demo/charity-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/charity-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$charity$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/charity-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$charity$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AA0NDg8NDgwLDQ0MDhIPD2QrEJA/Fo87EAAMDA4TExUSEhQPDxI+Pz6BVkGCXUyrUCEAFRUXKiosHR0fFxcZcWlniGtejmpXr1EhABgQDicXEQsLDRUVFlxWVYJjVIJeSqpNHQALCgwSEBIQEBISEhQeGxtwOh+USCK4ShI++xfGoEE/2QAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/company.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/company.ef6585b4.png");
})()),
"[project]/src/assets/images/demo/company.png.mjs/(IMAGE)/[project]/src/assets/images/demo/company.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$company$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/company.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$company$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAe0lEQVR42hXMyw7CIBCFYd7/BXwKlybGtUu7NiYYTYoUeqHQgQGVIY67Lzknv6AcCaEVZFSMfzjTwIkveHRTCY7S1hDyYigGhsDZDPK6aMWPUT/3h5N6dJSCqKv96HsFz4O8XbrjrpdnSl7UbY1GlWlIVr1ng7bP44trP2/GbvNdBzgsAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/company-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/company-dark.ac79a842.png");
})()),
"[project]/src/assets/images/demo/company-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/company-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$company$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/company-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$company$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAd0lEQVR42g3JSQrCMBQA0BwjyR8yR6v9MYLahYJFxI3rXqL3P0C7e/CUMzZYw1rv8BZYm5FMBaMq8ynGo/cZMQOcgyuECUBJCq/e+jAU4vtVpvk3P8f9lDicMlWiQvR539bl8f+2yqgOTD1HCe6SonjuObToC8IGDI8RxOE3+psAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/creative.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/creative.25b1f012.png");
})()),
"[project]/src/assets/images/demo/creative.png.mjs/(IMAGE)/[project]/src/assets/images/demo/creative.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$creative$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/creative.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$creative$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AJWTkJKNipuZl6Cfnq+uru/v8PXs6PXw7gBOSERPSUVkYF51c3GIg3/q6er09PX09PUAQDs4ODAtY1xYb21uhoWG5ubn7e3u7+/wADs0MC4iGVlLQmdmZn5+f9fX2NnZ2uPj5ACSkI+Qi4mZko6kpKStrq/k5OXo6Onm5ufGnUqqkx5h+gAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/creative-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/creative-dark.8f0d68e8.png");
})()),
"[project]/src/assets/images/demo/creative-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/creative-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$creative$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/creative-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$creative$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AFFPTU9LSVdWVWFhYU9QURoaHSQbGR4ZGQBLRUFMRkNlYmB4d3ZdWVccHB4YGBsYGBsAPjk3NC0qZF5bcXFzXF1gIyMmHx8iGxseADcvKygcE1hKQWlqa1ZZXDQ1ODExNCIiJAAvLS0uKSg6Mi9EREY4Oj0nKCoiIiUkJCdWTBwSMtuzYgAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/ebook.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/ebook.f50eee25.png");
})()),
"[project]/src/assets/images/demo/ebook.png.mjs/(IMAGE)/[project]/src/assets/images/demo/ebook.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$ebook$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/ebook.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$ebook$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAgklEQVR42g3NzQqCQBAA4H3/t+jWKSgQjxUEQR6KICjYkqgQtHR3bcaZ/dXLd/1EABXQJMfBu+B9nDRNBCWgeuj603dfx2SJ5e35q5rIKNRbXk/Fq5S6ay+H/Wq+OGeZ+2vh6xLvR2taS8N2OdvkebHeWehFQp0YpiPFQAiM6JmipREDem3Q8zYQvAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/ebook-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/ebook-dark.f4042709.png");
})()),
"[project]/src/assets/images/demo/ebook-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/ebook-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$ebook$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/ebook-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$ebook$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ACQcGSIbGRsYGBoYGhkYGx0bHisfGyQbGQA3KSIwKScqJSUeHR8wLjKEgotxa3AmISAAOS0nSEA+ODQ0JiUnXVNRraSpsZSUODIxADYkHEUsICggHh4cHldHOZCHh4h9gjUwMQAmHRoiHBoeGhsaGRscGhwmJCYqJykhHR3qGhlixhSecgAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/finance.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/finance.799287cf.png");
})()),
"[project]/src/assets/images/demo/finance.png.mjs/(IMAGE)/[project]/src/assets/images/demo/finance.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$finance$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/finance.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$finance$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAgklEQVR42g3JMQ7CIBQAUA5n4s1YvYKDB3D0AK41rYlxsLGWEMQ2JQQKH/x8ovNjZbUUXMVMiKWgX6Y8yxosi7NSz4eWAkL4c3vcd+0lxcC8FsOtm5TMAPjpR745H7hxnqEeUt98va0FQTQj35rTjsAxcgtFVzNUKpjW1/0K5k05/gCRqGvmIgK3yAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/finance-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/finance-dark.feec9ac6.png");
})()),
"[project]/src/assets/images/demo/finance-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/finance-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$finance$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/finance-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$finance$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ACMbGSEaGRsXGBoYGhkYGyUfHi0fGyQaGAAuIyA4MTAyLi4hICIgHR9rSjxAPz8jISIAMSYiQDY0MCsrHx0fRjQpym8ti2xPKi4xADQhGkQoGyUeHRsZHE04JctwMo9ZMSMdHAAnHBkjGxkeGRoaGBojHx9IQDwqIRsdGBj0ZBVPt4DW1QAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/hosting.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/hosting.0dbb2af9.png");
})()),
"[project]/src/assets/images/demo/hosting.png.mjs/(IMAGE)/[project]/src/assets/images/demo/hosting.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$hosting$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/hosting.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$hosting$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAdElEQVR42i2MsQ6DMAxE/f+f1ZWFFlqqqkpAomogJA62IwIsBInTDXdveMDEAZGIiQg9jsNo9EfQgTFDWd6rqu77n36otvl2WoVA4KxVxa19P73Hop6aLqCbmSNItuiX2L9InCnmJ2cibNue1jWls8tyjQwPlUpucPQE1wcAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/hosting-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/hosting-dark.8df8b73d.png");
})()),
"[project]/src/assets/images/demo/hosting-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/hosting-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$hosting$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/hosting-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$hosting$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAfElEQVR42g3IuwrCQBBA0W2TzOzbmVlXEMVmjQaxDBGsbaz9AysbCfn9bHM5XIWgnbG1iNoaRxs+ZfYIioiH4db3l5TyeB2X33+ZZ2uDCs5P52M57LW25f56f76P6anRKeigELKBtgUfxYcIgE3TqRiZKDFvRXKFyK6izhWxSA5e/DqTjAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/marketing.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/marketing.467a4472.png");
})()),
"[project]/src/assets/images/demo/marketing.png.mjs/(IMAGE)/[project]/src/assets/images/demo/marketing.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/marketing.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AOXp7+jp8ezp8+zn8uvm8unm8eTZ4OXd6gDn7O/k6vDn5/Hi4+/X1t21sraVhYLOwc8A4uPk0NfY3OLm2+TpqaGZfHdyiHJd1cPDAOnh3+Da1eft7tnf43NqZ2NXUm5ta8nN0ADq6+7q7Ozw8/Pu7/HJw8jFwMLO1NXp7e5BHmBr1nbzJgAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/marketing-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/marketing-dark.21c4e64f.png");
})()),
"[project]/src/assets/images/demo/marketing-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/marketing-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/marketing-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AA0SEw4TFAwTFgwXHAsaIAodIxwiIRQXFgAKExULFhsIGR8MJS07TFA4RklQS0MgJiIAEx4iIzM6Ey43FDQ+hoF6W11ZZFZCJSsmABUcHyEsLgcqNQgsN0dEQj87OFNYVhY0PQAKGiAKJi8BLj4CLTsOLjgVOEIvV2QONUFmWRRufCxcNgAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/marketing-2.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/marketing-2.fcd166b0.png");
})()),
"[project]/src/assets/images/demo/marketing-2.png.mjs/(IMAGE)/[project]/src/assets/images/demo/marketing-2.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/marketing-2.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AOfr8Onq8e3q8+vn8ejk7+nm8OPY4eXd6gDp7e7m7vHo7PLi5ezMy829uriIipPSy94A4uHjzdPU2+Di4ejsoJaOqZ2Uhnly2tjbAOji4+Xa1O/x8ezt7nFra312cpmSj+Df3wDx8fb19Pf6+vv39/eqq6yhn525tLPs6+2TS2G9R0dU2AAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/marketing-2-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/marketing-2-dark.2b4134f0.png");
})()),
"[project]/src/assets/images/demo/marketing-2-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/marketing-2-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/marketing-2-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AA0SEw4TFAwTFgwYHA8eIw4gJhkgIRMXFQAKExYKFxwHGiALHyVHT096gHw4SEsOHiIAEh4jJDc+FjI8BigzYl5YqJyTa2JcFCowABceHyQvMQUtOwMsODc7PHx2cm9raRUlKwAIGB4EJjEBMUEBLjwPKjIkPEArQUcHJjHIsxXeAfqKcAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/marketing-3.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/marketing-3.218623cb.png");
})()),
"[project]/src/assets/images/demo/marketing-3.png.mjs/(IMAGE)/[project]/src/assets/images/demo/marketing-3.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$3$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/marketing-3.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$3$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AHl6eoSBfYCAf3d3d3Bta3t2cl5XVVFWYAA7QEI+QEA2MzJIQDxHQDw/NzIXGyIGFikAHSAhFxcYKSQiWEc+Sj45JiQmCxAZBRUoAG1ubGlpaH94dX53dHl4eG9vcGhqbWVudwD9/f39/f36+vrt7e7u7u77+/v9/f39/f3xfjToB1qjfQAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/marketing-3-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/marketing-3-dark.cbb69e8d.png");
})()),
"[project]/src/assets/images/demo/marketing-3-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/marketing-3-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$3$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/marketing-3-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$3$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAf0lEQVR42iXI0QrCIBSAYW92FUQKdk4O2dzmpkUEc5mxYdZFRU/Q+z9JQvBd/Pzk7P09ziGEyU1Ha9zpMFSSYUPm9IgpeTe+0/JKy+0yQqmKrSWyVgBou+b7jJ947bt+tdkV3BAOnFI2qGrfKt1qREEZrKEmiGUmhNTaZDn+5wcCmRH9laG/WwAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/photography.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/photography.d8f9814f.png");
})()),
"[project]/src/assets/images/demo/photography.png.mjs/(IMAGE)/[project]/src/assets/images/demo/photography.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$photography$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/photography.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$photography$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AP329P318v749vz29MLV06zEvb69sPnv6gD48Ozm3dro4d727uuWmJdge3t8qqj18e4A+PDt6OHf8Onm9u/skY6NYWNjf4CA9e7rAPnx7vbu6/nx7vjx7pSTkGNjYX98fPLr6ACNiomQjYyQjYySj451dXNqaWdpaGePi4qvaViHMDgzMwAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/photography-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/photography-dark.facae77b.png");
})()),
"[project]/src/assets/images/demo/photography-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/photography-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$photography$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/photography-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$photography$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAdklEQVR42hXJMRLCIBAAQF4R4C6BI5AzjAFCRnGksLfQwv8/Rp3ZbgUBONBGKQuwrAtzSM4wahGJet1bKXF2Rw23ds7b5sdRrESXlDLziSi/nvvnXY/sRxQBkc3kEX9Kv5dHb9f4Dz0MKBUqBVLNluyE3mmQ8gtbxxFwx53BVAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/portfolio.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/portfolio.14f64308.png");
})()),
"[project]/src/assets/images/demo/portfolio.png.mjs/(IMAGE)/[project]/src/assets/images/demo/portfolio.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/portfolio.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAgElEQVR42g3JuwrCMBSA4bz/6iuICE7OThZcRIs4SKdSC4FUm5tNcnI5ic3Pv30EF5GtLtHnFGuhLqdsJPGcKUbV/AFrBqmPt/bUjxEMsexNuycdeiV4O/Hdfrs5X7wzBL8jjB1oXjC9ZvlomsP1HirkRRT3KxH+GRNiAgfOlOBW3elt2FdVKSYAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/portfolio-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/portfolio-dark.54d67cd7.png");
})()),
"[project]/src/assets/images/demo/portfolio-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/portfolio-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/portfolio-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ACQbGSIaGRsXGBoYGh0eICIjJS8lIiUbGQAsIR8wKCcrJychHyFNXF98l5pgg4glIiMAMiQgQTQwNjAxJyUobYiNp6ikYZCVLCorADEgGj0oICkiIRsZHFhtcp2QkGuJjVRRUQAnHBojGxoeGhoaGRseHyImIiQjIiMjHh5AXhrHUvPInAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/portfolio-2.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/portfolio-2.9aa244b4.png");
})()),
"[project]/src/assets/images/demo/portfolio-2.png.mjs/(IMAGE)/[project]/src/assets/images/demo/portfolio-2.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/portfolio-2.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AMTP98XO9sXQ+MTP98LN9Le71MHB4cXL8QC3t/W1tfK1tfK2tvOzsuuZhoykn8e5ufcAxrHvwLDlwa/kwqvjwK7lpam2sq3RyLL0ANeu19ex0dy02dut1suoy6SmsMepwtmt2wDjp7njp7njp7njp7m7mrBbepm7ma/jp7nhIVsgTPSDIAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/portfolio-2-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/portfolio-2-dark.bb3b2a37.png");
})()),
"[project]/src/assets/images/demo/portfolio-2-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/portfolio-2-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/portfolio-2-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AAkJCwoJCwgICgkKDAsLDSAcGxoRDg8LCgAKDhUOERgNEBcMDxYPEBZrWE8oIyUIDBMAFhwoICUvISQuIiMsKi86lJmiXWVwERckACUsOSouOCEmMyQoND9ET5mep1haYh8nNgAsNUUtNUUsNUUsNUU3SFxOcpE2R1ssNUXuNxYcwE1iNgAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/startup.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/startup.53da6521.png");
})()),
"[project]/src/assets/images/demo/startup.png.mjs/(IMAGE)/[project]/src/assets/images/demo/startup.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$startup$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/startup.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$startup$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/APX19fb09Pf39/X19fLy8vT09PTr5vbx7gDx8fLt7e7v7/Dv7/DNzcrCxMDp6eny8fIA6Ojp0dLS29vc6enpvr66vby35ODe8vHyAPDo5evd1vDw8enm5qiPhqJ4Y7KGbefd2AD08/P08vL09PXs6ei8nJG/loTEopDq4NseYGadnigeHgAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/startup-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/startup-dark.7002ec26.png");
})()),
"[project]/src/assets/images/demo/startup-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/startup-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$startup$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/startup-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$startup$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AA0NDw8NDgwMDREREisqLC4uLzsyLx0YFwAMDA4QEBIODhAcHB2UlJGoqabFxcU/P0EAFRUXLCwuIyMkIiIjnZ2ZvLy32dbUSUlLABkRDygaFAwMDhkWF4ZtZKJ4Y6Z7Yj0zLgALCgsMCgsJCQsPCww9HRJTKhhSMB4iGBOMsBuUQe1cRAAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/admin-dashboard.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/admin-dashboard.a60f1caf.png");
})()),
"[project]/src/assets/images/demo/admin-dashboard.png.mjs/(IMAGE)/[project]/src/assets/images/demo/admin-dashboard.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$dashboard$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/admin-dashboard.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$dashboard$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAaElEQVR42g2MSxKDMAxDc//b5FNIj9QNSYHEtuwweCPNk2ZeyDmnmGJMOZdt22v91r2W8gnMDGGFQAFVL4Yn/JjjOkD3+T+I2SceF+YIJ9Nv3mut3hsAETEzVQ0Oy+wBPcpGo7fm6OYXmddt9DZu/ZIAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/admin-dashboard-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/admin-dashboard-dark.07eb6366.png");
})()),
"[project]/src/assets/images/demo/admin-dashboard-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/admin-dashboard-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$dashboard$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/admin-dashboard-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$dashboard$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAYElEQVR42g2MyQ3AMAzDMkAOya4d52j3H7MGBD0IgoVUQnpHrSMfEJUH0DLnVqqQA5JLNMR8rhKxV5gp79miBup87MQqfj+8X6197TOGEJpBsyju0WqX3tiaE/fclNzmDySBCPSRs0QQAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/admin-chat.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/admin-chat.9baad5fa.png");
})()),
"[project]/src/assets/images/demo/admin-chat.png.mjs/(IMAGE)/[project]/src/assets/images/demo/admin-chat.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$chat$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/admin-chat.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$chat$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAi0lEQVR42h2NvQoCMRCE7/3fQ2ys7i94IIgI1lrYCCqIcqXGbLKbxIx7V3zMMDMwVdd2aOoGtdKqN8ZgWA8zfW9QMQtEyTkjSsRPNY1X8POiOaMiR7AfC/YednzAve6w5wP4dkKcBl4Lcg6JvnD7FWi7AO2W8McNJHi9CFx0VHJKJXJQzTPvEAqJlD/nk5KPh9WnYQAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/admin-chat-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/admin-chat-dark.77ab0a39.png");
})()),
"[project]/src/assets/images/demo/admin-chat-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/admin-chat-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$chat$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/admin-chat-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$chat$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAfUlEQVR42h2NOw7DMAxDs1f+O4plO22WXqJzl97/PmIVDwQB4pHcUirIphASnAtLMWaUXM0LNpGJWhkxZGQL6eHhySEbxCzYzvMFkbFa91okwvcK+L0LRusGzCcObiDyKGVfF+wJn8sAMaC1rns91PuodqG2pJyS9mm5DP0Dm2wxjVdP+VQAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/admin-project.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/admin-project.40fda028.png");
})()),
"[project]/src/assets/images/demo/admin-project.png.mjs/(IMAGE)/[project]/src/assets/images/demo/admin-project.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$project$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/admin-project.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$project$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAdElEQVR42iWNUQ7DIAxDuf91ukIrdqfRDRqSTPGM9mE58rOclHNB3nds2wPrPo8TtT6pilIOJFWFyMSw5QI3gdw3rkknS3MSjgFl4WovGMG7NUwzZvZf6L3DVDDXAgujfyCEq5RMNRiEu8V3yTT4KsydmccPtLaV43JmHOEAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/admin-project-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/admin-project-dark.90a7e7b5.png");
})()),
"[project]/src/assets/images/demo/admin-project-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/admin-project-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$project$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/admin-project-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$project$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAbklEQVR42iWNWRLDMAhDfYHELDZeMun9T4mquh9CIJhHUXUYJeK4rnokYnDvJytzPmgtUKmfuymiB3RtjPWgLJYeE6KGz/vC6ZvLSmqM9SdMNm5GQoeLYMTAfQ42SsRMBilVU0VT7ppmLW/OfJlfnuUxMDwtbQAAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/auth-login.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/auth-login.bb27eefd.png");
})()),
"[project]/src/assets/images/demo/auth-login.png.mjs/(IMAGE)/[project]/src/assets/images/demo/auth-login.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$login$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/auth-login.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$login$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAe0lEQVR42gUAwQqCMHS3CoI0AvVt7j0399Y2Ix2R2K1DQscO/f+viLBB3ebr6z3NS1of1joIdz2OKBxjfvr/J0+DRrqALLqu4qBFxy17lfgIsMvmtHL5W8yQSKAn4zTJA9R7hCK25Tcr3dfCRcJeSXVGhsZUFFtpGwrNBnrvEPnJBUadAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/auth-register.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/auth-register.12525172.png");
})()),
"[project]/src/assets/images/demo/auth-register.png.mjs/(IMAGE)/[project]/src/assets/images/demo/auth-register.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$register$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/auth-register.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$register$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAfElEQVR42gUAuQ7CIJRJjQv1quV674EFBO2Rmthq4mQnFzf//1MMOyXdjfk9T4+xfTZk8HBuTN8j8wFv9/ib2y4JDTshuLXHkIDZYEJU2a+FWGa7ebniO7nrhRgGch5IrWS5iIoPWHwGDXXFfCaslVZcwraEvfFSuoqS+ANkiRCNC12I+gAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/auth-logout.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/auth-logout.145d353e.png");
})()),
"[project]/src/assets/images/demo/auth-logout.png.mjs/(IMAGE)/[project]/src/assets/images/demo/auth-logout.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$logout$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/auth-logout.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$logout$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAeUlEQVR42gUAOw7CIJTJpHFq1VC+7wEFStGIxJR0dFAXR+9/loa4JG9t3l6PtuXP0znP012XAsQHqGv8v2vJSuleqsEYGpImJqgQZfZHOh4UXtaZ/5q9ZiQQ0HqNomNjd6Y9iOFbpZ5G4heESQp5gsiZpbgo4TgmtgNr9BC1UxZZ3gAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/auth-recoverpw.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/auth-recoverpw.9cdc5f8e.png");
})()),
"[project]/src/assets/images/demo/auth-recoverpw.png.mjs/(IMAGE)/[project]/src/assets/images/demo/auth-recoverpw.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$recoverpw$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/auth-recoverpw.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$recoverpw$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAeklEQVR42gUATQvCINRTMIKQFTg/9rSnPucsWhINjx2qW4fo//+WYD6b8zq1x3Vt5XXznlS+wLJYFsnWe/o9ay1jwj4ARxSUgR1ppGQKbbXcNL/7TPzb8FQcs+QwgtOdHLqD4KD6dzUQBhZnZ4PRZm+TkijcDNorl+UfgSYRAgMhejMAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/assets/images/demo/auth-reset-password.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/auth-reset-password.c40b4f7f.png");
})()),
"[project]/src/assets/images/demo/auth-reset-password.png.mjs/(IMAGE)/[project]/src/assets/images/demo/auth-reset-password.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$reset$2d$password$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/demo/auth-reset-password.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$reset$2d$password$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1280,
    height: 720,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAfElEQVR42g3CSwrCMBAA0OwU3DQUtPlOvlPHKLZBLBU3LhSXIt7/LBYei6RP0/72GKe5vC4xZklnOwzAMkK99r9nHYsB10rFfdghWebRYK8LbpRc3XPzIf6dw7E4BuhCtk6tRbdokuLvqm3qWD44SFrpFlAKvwUyKkpH4g992hD9g02rrwAAAABJRU5ErkJggg==",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/src/components/home/data.js [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "adminDemos": ()=>adminDemos,
    "allFeatures": ()=>allFeatures,
    "authDemos": ()=>authDemos,
    "developmentTools": ()=>developmentTools,
    "landingDemos": ()=>landingDemos
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lu/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$tailwindcss$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$tailwindcss$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/tailwindcss.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/tailwindcss.svg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$html$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$html$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/html.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/html.svg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$css$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$css$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/css.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/css.svg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$javascript$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$javascript$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/javascript.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/javascript.svg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$bun$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$bun$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/bun.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/bun.svg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$yarn$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$yarn$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/yarn.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/yarn.svg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$vitejs$2d$logo$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$vitejs$2d$logo$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/logo/vitejs-logo.svg.mjs/(IMAGE)/[project]/src/assets/images/demo/logo/vitejs-logo.svg [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/agency.png.mjs/(IMAGE)/[project]/src/assets/images/demo/agency.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/agency-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/agency-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$2$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/agency-2.png.mjs/(IMAGE)/[project]/src/assets/images/demo/agency-2.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$2$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/agency-2-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/agency-2-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$charity$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$charity$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/charity.png.mjs/(IMAGE)/[project]/src/assets/images/demo/charity.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$charity$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$charity$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/charity-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/charity-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$company$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$company$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/company.png.mjs/(IMAGE)/[project]/src/assets/images/demo/company.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$company$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$company$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/company-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/company-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$creative$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$creative$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/creative.png.mjs/(IMAGE)/[project]/src/assets/images/demo/creative.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$creative$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$creative$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/creative-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/creative-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$ebook$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$ebook$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/ebook.png.mjs/(IMAGE)/[project]/src/assets/images/demo/ebook.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$ebook$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$ebook$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/ebook-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/ebook-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$finance$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$finance$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/finance.png.mjs/(IMAGE)/[project]/src/assets/images/demo/finance.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$finance$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$finance$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/finance-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/finance-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$hosting$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$hosting$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/hosting.png.mjs/(IMAGE)/[project]/src/assets/images/demo/hosting.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$hosting$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$hosting$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/hosting-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/hosting-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/marketing.png.mjs/(IMAGE)/[project]/src/assets/images/demo/marketing.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/marketing-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/marketing-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$2$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/marketing-2.png.mjs/(IMAGE)/[project]/src/assets/images/demo/marketing-2.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$2$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/marketing-2-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/marketing-2-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$3$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$3$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/marketing-3.png.mjs/(IMAGE)/[project]/src/assets/images/demo/marketing-3.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$3$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$3$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/marketing-3-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/marketing-3-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$photography$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$photography$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/photography.png.mjs/(IMAGE)/[project]/src/assets/images/demo/photography.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$photography$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$photography$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/photography-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/photography-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/portfolio.png.mjs/(IMAGE)/[project]/src/assets/images/demo/portfolio.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/portfolio-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/portfolio-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$2$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/portfolio-2.png.mjs/(IMAGE)/[project]/src/assets/images/demo/portfolio-2.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$2$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/portfolio-2-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/portfolio-2-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$startup$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$startup$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/startup.png.mjs/(IMAGE)/[project]/src/assets/images/demo/startup.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$startup$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$startup$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/startup-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/startup-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$dashboard$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$dashboard$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/admin-dashboard.png.mjs/(IMAGE)/[project]/src/assets/images/demo/admin-dashboard.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$dashboard$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$dashboard$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/admin-dashboard-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/admin-dashboard-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$chat$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$chat$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/admin-chat.png.mjs/(IMAGE)/[project]/src/assets/images/demo/admin-chat.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$chat$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$chat$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/admin-chat-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/admin-chat-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$project$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$project$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/admin-project.png.mjs/(IMAGE)/[project]/src/assets/images/demo/admin-project.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$project$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$project$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/admin-project-dark.png.mjs/(IMAGE)/[project]/src/assets/images/demo/admin-project-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$login$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$login$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/auth-login.png.mjs/(IMAGE)/[project]/src/assets/images/demo/auth-login.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$register$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$register$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/auth-register.png.mjs/(IMAGE)/[project]/src/assets/images/demo/auth-register.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$logout$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$logout$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/auth-logout.png.mjs/(IMAGE)/[project]/src/assets/images/demo/auth-logout.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$recoverpw$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$recoverpw$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/auth-recoverpw.png.mjs/(IMAGE)/[project]/src/assets/images/demo/auth-recoverpw.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$reset$2d$password$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$reset$2d$password$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/demo/auth-reset-password.png.mjs/(IMAGE)/[project]/src/assets/images/demo/auth-reset-password.png [app-ssr] (static) (structured image object, ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const developmentTools = [
    {
        name: "Tailwindcss",
        logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$tailwindcss$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$tailwindcss$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        name: "HTML5",
        logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$html$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$html$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        name: "CSS3",
        logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$css$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$css$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        name: "Javascript",
        logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$javascript$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$javascript$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        name: "Bun",
        logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$bun$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$bun$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        name: "Yarn",
        logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$yarn$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$yarn$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        name: "ViteJs",
        logo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$vitejs$2d$logo$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$vitejs$2d$logo$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    }
];
const landingDemos = [
    {
        name: "Agency",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/agency"
    },
    {
        name: "Agency Two",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$2$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$2$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$agency$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/agency-2"
    },
    {
        name: "Charity",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$charity$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$charity$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$charity$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$charity$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/charity"
    },
    {
        name: "Company",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$company$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$company$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$company$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$company$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/company"
    },
    {
        name: "Creative",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$creative$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$creative$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$creative$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$creative$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/creative"
    },
    {
        name: "Ebook",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$ebook$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$ebook$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$ebook$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$ebook$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/ebook"
    },
    {
        name: "Finance",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$finance$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$finance$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$finance$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$finance$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/finance"
    },
    {
        name: "Hosting",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$hosting$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$hosting$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$hosting$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$hosting$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/hosting"
    },
    {
        name: "Marketing",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/marketing"
    },
    {
        name: "Marketing 2",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$2$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$2$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/marketing-2"
    },
    {
        name: "Marketing 3",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$3$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$3$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$3$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$marketing$2d$3$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/marketing-3"
    },
    {
        name: "Photography",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$photography$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$photography$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$photography$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$photography$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/photography"
    },
    {
        name: "Portfolio",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/portfolio"
    },
    {
        name: "Portfolio 2",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$2$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$2$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$portfolio$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/portfolio-2"
    },
    {
        name: "Startup",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$startup$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$startup$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$startup$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$startup$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/landing/startup"
    }
];
const adminDemos = [
    {
        name: "Dashboard",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$dashboard$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$dashboard$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$dashboard$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$dashboard$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/admin/dashboard"
    },
    {
        name: "Chat",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$chat$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$chat$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$chat$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$chat$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/admin/chat"
    },
    {
        name: "Project",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$project$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$project$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$project$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$admin$2d$project$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        link: "/admin/project"
    }
];
const authDemos = [
    {
        name: "Sign In",
        link: "/auth/sign-in",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$login$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$login$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$login$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$login$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        name: "Sign Up",
        link: "/auth/sign-up",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$register$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$register$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$register$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$register$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        name: "Logout",
        link: "/auth/logout",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$logout$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$logout$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$logout$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$logout$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        name: "Forgot Password",
        link: "/auth/forgot-pass",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$recoverpw$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$recoverpw$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$recoverpw$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$recoverpw$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        name: "Reset Password",
        link: "/auth/reset-pass",
        lightImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$reset$2d$password$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$reset$2d$password$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        darkImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$reset$2d$password$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$auth$2d$reset$2d$password$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    }
];
const allFeatures = [
    {
        title: "Built With Tailwind CSS",
        description: "Rapidly build modern websites without ever leaving your HTML.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$tailwindcss$2e$svg$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$demo$2f$logo$2f$tailwindcss$2e$svg__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        title: "Ultra Responsive",
        description: "Our fully Responsive design ensures your content is beautifully presented no matter what device your audience is using.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuAirplay"]
    },
    {
        title: "Dark Mode Support",
        description: "Embark on a Rich Experience: Unveiling a Host of Advanced Features within Our Dark Mode Support Environment.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuSunMoon"]
    },
    {
        title: "Production Ready",
        description: "Our solutions have undergone extensive testing to ensure they can handle the demands of a production environment.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuPackage"]
    },
    {
        title: "Hygienic Design",
        description: "Our designs feature smooth and continuous surfaces, minimizing areas where dirt, bacteria, or contaminants can accumulate.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuFigma"]
    },
    {
        title: "High Performance",
        description: "We understand that your requirements are unique. Our high-performance solutions are customizable to match your specific goals.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuCircuitBoard"]
    },
    {
        title: "Multi Browser Support",
        description: "Our e-commerce store is rigorously tested and optimized to work flawlessly on all major web browsers, offering a consistent shopping experience to all our customers.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuGlobe2"]
    },
    {
        title: "Well Documented",
        description: "Our documentation is a treasure trove of valuable information, from getting started guides to advanced tutorials. It's all there to help you make the most of our services.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuFileText"]
    },
    {
        title: "Great Support",
        description: "Our support team is always ready to help. Whether you have questions, encounter issues, or need guidance, we're just a message or call away.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuUser2"]
    },
    {
        title: "Highly Customizable",
        description: "Our product is designed to adapt to your specific requirements. Whether you're an individual, a business, or an organization, we provide the tools to customize it to your liking.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuMove"]
    },
    {
        title: "Light as a Feather",
        description: "From our years of experience and expertise in Development, we know users vary, they could have slow of fast network. They all deserve seamless experience in shopping with you. That's why our product is developed with fewer lines.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuFeather"]
    },
    {
        title: "UX Considered",
        description: "A good design does not need any explanation because a good design can speak for itself. Out app doesn't only have a good User Interface, we also have considered User experience.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuStar"]
    }
];
;

})()),
"[project]/src/components/home/Features.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/home/data.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const Features = ()=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
        className: "py-20",
        id: "features",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "mx-20",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: " mx-auto mb-14 text-center",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                            className: "mb-2 inline-flex rounded-lg border-x-2 border-x-primary-600 bg-primary/20 px-2 text-base font-semibold text-primary-700",
                            children: "Features"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/home/Features.jsx>",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "mb-2.5 text-3xl font-semibold text-default-950",
                            children: "Awesome Template Features"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/home/Features.jsx>",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/home/Features.jsx>",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allFeatures"].map((feature, idx)=>{
                        const Icon = feature.icon;
                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50",
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "p-6",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex flex-col items-center justify-center gap-4 text-center",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "shrink",
                                            children: typeof feature.icon === "object" ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-500/20 text-primary-600",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: feature.icon,
                                                    alt: "iconImage",
                                                    className: "h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/home/Features.jsx>",
                                                    lineNumber: 30,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/home/Features.jsx>",
                                                lineNumber: 29,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/20 text-primary-600",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Icon, {
                                                    className: "h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/home/Features.jsx>",
                                                    lineNumber: 38,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/home/Features.jsx>",
                                                lineNumber: 37,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/home/Features.jsx>",
                                            lineNumber: 27,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "grow",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                                    className: "mb-2 text-lg font-semibold text-default-950",
                                                    children: feature.title
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/home/Features.jsx>",
                                                    lineNumber: 43,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-sm",
                                                    children: feature.description
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/home/Features.jsx>",
                                                    lineNumber: 46,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/components/home/Features.jsx>",
                                            lineNumber: 42,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/home/Features.jsx>",
                                    lineNumber: 26,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/home/Features.jsx>",
                                lineNumber: 25,
                                columnNumber: 17
                            }, this)
                        }, idx, false, {
                            fileName: "<[project]/src/components/home/Features.jsx>",
                            lineNumber: 21,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "<[project]/src/components/home/Features.jsx>",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "mt-6 text-center text-base font-medium text-primary-900",
                    children: "Empower Your Journey with Our Engaging Landing Demo.🔥"
                }, void 0, false, {
                    fileName: "<[project]/src/components/home/Features.jsx>",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/home/Features.jsx>",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/home/Features.jsx>",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Features;

})()),
"[project]/src/assets/images/logo-sm.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/logo-sm.2988a236.png");
})()),
"[project]/src/assets/images/logo-sm.png.mjs/(IMAGE)/[project]/src/assets/images/logo-sm.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$sm$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/logo-sm.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$sm$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 160,
    height: 160,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAsUlEQVR42lWPsQrCQBBET/Duki/QykaiqIUBBbHJL1jYapUQtFCCYKcopDGQRgvFH0h1H+m9yIEezDHszu7MCmFf22+0DiN1rCLfVJFn4NSEaz5m+nkNdZ72ZAouocqp1SLUxUSXp7E6J4GMAbyY6pKeYGUcyOQ1997ZUGUAboUJloLPCuJ1V64WneYSwKkx/LWw6/YDtbtZKwDHtrZwIQm26cstIPDdhfw/0zNY/p75Af4IP+sI1bcfAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/src/assets/images/other/bg-lines-2.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/bg-lines-2.bd5820f4.png");
})()),
"[project]/src/assets/images/other/bg-lines-2.png.mjs/(IMAGE)/[project]/src/assets/images/other/bg-lines-2.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$other$2f$bg$2d$lines$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/other/bg-lines-2.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$other$2f$bg$2d$lines$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1902,
    height: 947,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAFUlEQVR42sXAgQAAAACAoPypxzh+AQCEAAG08qKFAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 4
};

})()),
"[project]/src/assets/images/other/bg-lines-2-dark.png [app-ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/bg-lines-2-dark.736bce8a.png");
})()),
"[project]/src/assets/images/other/bg-lines-2-dark.png.mjs/(IMAGE)/[project]/src/assets/images/other/bg-lines-2-dark.png [app-ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$other$2f$bg$2d$lines$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/src/assets/images/other/bg-lines-2-dark.png [app-ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$other$2f$bg$2d$lines$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1902,
    height: 947,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAG0lEQVR42rXKIQEAAACDMCz9C7/BHWJuqDz0YeD0A2GI3FOaAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 4
};

})()),
"[project]/src/components/home/Hero.jsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$sm$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$sm$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/logo-sm.png.mjs/(IMAGE)/[project]/src/assets/images/logo-sm.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/lu/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$other$2f$bg$2d$lines$2d$2$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$other$2f$bg$2d$lines$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/other/bg-lines-2.png.mjs/(IMAGE)/[project]/src/assets/images/other/bg-lines-2.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$other$2f$bg$2d$lines$2d$2$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$other$2f$bg$2d$lines$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/src/assets/images/other/bg-lines-2-dark.png.mjs/(IMAGE)/[project]/src/assets/images/other/bg-lines-2-dark.png [app-ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/home/data.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/src/context/index.js [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$useLayoutContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/context/useLayoutContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
const Hero = ()=>{
    const { themeMode } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$useLayoutContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutContext"]();
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("section", {
        className: "bg-default-10 relative border-b border-default-100  py-6 dark:bg-default-50 sm:py-10 md:py-32",
        style: {
            backgroundImage: `url(${themeMode === "light" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$other$2f$bg$2d$lines$2d$2$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$other$2f$bg$2d$lines$2d$2$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$other$2f$bg$2d$lines$2d$2$2d$dark$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$other$2f$bg$2d$lines$2d$2$2d$dark$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src})`
        },
        id: "home",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "px-6 sm:px-10 md:px-20",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "grid items-center gap-x-6 gap-y-10",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mb-10 mt-12 flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "mb-4 flex items-center justify-center gap-4",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "h-10",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$sm$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$src$2f$assets$2f$images$2f$logo$2d$sm$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                                width: 40,
                                                height: 40,
                                                alt: "images",
                                                className: "h-full max-w-full"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/home/Hero.jsx>",
                                                lineNumber: 31,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/home/Hero.jsx>",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "inline-block rounded-md bg-primary/10 px-4 text-base/loose font-semibold text-primary",
                                            children: "v1.0.0"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/home/Hero.jsx>",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/home/Hero.jsx>",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                    className: "mb-6 text-3xl font-semibold capitalize text-default-950 sm:text-5xl/tight",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "text-primary",
                                            children: "AeroPage"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/home/Hero.jsx>",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this),
                                        " - One Page Template"
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/home/Hero.jsx>",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "mx-auto max-w-3xl text-base text-default-700",
                                    children: "The Make your website or web application perfect starting point for your next project and the ultimate resource for learning how experts build real websites with Tailwind CSS."
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/home/Hero.jsx>",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/home/Hero.jsx>",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "my-16 text-center",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "text-xl font-medium text-default-900",
                                    children: "Technology stack"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/home/Hero.jsx>",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "mt-4 inline-flex flex-wrap items-center justify-center gap-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$data$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["developmentTools"].map((item, idx)=>{
                                        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "hs-tooltip inline-block [--placement:top] [--trigger:hover]",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "hs-tooltip-toggle flex h-14 w-14 items-center justify-center rounded-lg bg-default-100",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        alt: "logoImage",
                                                        src: item.logo,
                                                        className: "h-8 w-8"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/components/home/Hero.jsx>",
                                                        lineNumber: 65,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/home/Hero.jsx>",
                                                    lineNumber: 64,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100",
                                                    role: "tooltip",
                                                    "data-popper-placement": "top",
                                                    children: [
                                                        item.name,
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                            className: "absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/components/home/Hero.jsx>",
                                                            lineNumber: 77,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/components/home/Hero.jsx>",
                                                    lineNumber: 71,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "<[project]/src/components/home/Hero.jsx>",
                                            lineNumber: 60,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/home/Hero.jsx>",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/home/Hero.jsx>",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex flex-wrap items-center gap-4",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"]("a", {
                                    href: "#demos",
                                    className: "inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2 font-semibold text-white backdrop-blur-2xl transition-all duration-500 hover:bg-primary-600",
                                    children: [
                                        " ",
                                        "Landing Demos ",
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuEye"], {
                                            className: "ms-3 h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/home/Hero.jsx>",
                                            lineNumber: 90,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/home/Hero.jsx>",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/admin/dashboard",
                                    target: "_blank",
                                    className: "inline-flex items-center justify-center rounded-lg bg-primary/20 px-6 py-2 font-semibold text-primary backdrop-blur-2xl transition-all duration-500 hover:bg-primary hover:text-white",
                                    children: [
                                        " ",
                                        "Admin Demos ",
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LuAirplay"], {
                                            className: "ms-3 h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/home/Hero.jsx>",
                                            lineNumber: 98,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/home/Hero.jsx>",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/home/Hero.jsx>",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/home/Hero.jsx>",
                    lineNumber: 27,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/home/Hero.jsx>",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/components/home/Hero.jsx>",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/home/Hero.jsx>",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Hero;

})()),
"[project]/src/app/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=src_8a2d83._.js.map