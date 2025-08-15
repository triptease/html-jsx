export const contentCategories: Map<string, {
          categories: Set<string>;
          children: Set<string>;
        }> = new Map([
    ["a", {
        categories: new Set(["flow", "phrasing", "interactive", "palpable"]),
        children: new Set(["transparent"])
    }],
    ["abbr", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["address", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["flow"])
    }],
    ["area", {
        categories: new Set(["flow", "phrasing"]),
        children: new Set([])
    }],
    ["article", {
        categories: new Set(["flow", "sectioning", "palpable"]),
        children: new Set(["flow"])
    }],
    ["aside", {
        categories: new Set(["flow", "sectioning", "palpable"]),
        children: new Set(["flow"])
    }],
    ["audio", {
        categories: new Set(["flow", "phrasing", "embedded", "interactive", "palpable"]),
        children: new Set(["source", "track", "transparent"])
    }],
    ["b", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["base", {
        categories: new Set(["metadata"]),
        children: new Set([])
    }],
    ["bdi", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["bdo", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["blockquote", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["flow"])
    }],
    ["body", {
        categories: new Set(["none"]),
        children: new Set(["flow"])
    }],
    ["br", {
        categories: new Set(["flow", "phrasing"]),
        children: new Set([])
    }],
    ["button", {
        categories: new Set(["flow", "phrasing", "interactive", "listed", "labelable", "submittable", "form-associated", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["canvas", {
        categories: new Set(["flow", "phrasing", "embedded", "palpable"]),
        children: new Set(["transparent"])
    }],
    ["caption", {
        categories: new Set(["none"]),
        children: new Set(["flow"])
    }],
    ["cite", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["code", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["col", {
        categories: new Set(["none"]),
        children: new Set([])
    }],
    ["colgroup", {
        categories: new Set(["none"]),
        children: new Set(["col", "template"])
    }],
    ["data", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["datalist", {
        categories: new Set(["flow", "phrasing"]),
        children: new Set(["phrasing", "option", "script-supporting"])
    }],
    ["dd", {
        categories: new Set(["none"]),
        children: new Set(["flow"])
    }],
    ["del", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["transparent"])
    }],
    ["details", {
        categories: new Set(["flow", "interactive", "palpable"]),
        children: new Set(["summary", "flow"])
    }],
    ["dfn", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["dialog", {
        categories: new Set(["flow"]),
        children: new Set(["flow"])
    }],
    ["div", {
        categories: new Set(["flow", "palpable", "select", "optgroup", "option"]),
        children: new Set(["flow", "optgroup", "option"])
    }],
    ["dl", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["dt", "dd", "div", "script-supporting"])
    }],
    ["dt", {
        categories: new Set(["none"]),
        children: new Set(["flow"])
    }],
    ["em", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["embed", {
        categories: new Set(["flow", "phrasing", "embedded", "interactive", "palpable"]),
        children: new Set([])
    }],
    ["fieldset", {
        categories: new Set(["flow", "listed", "form-associated", "palpable"]),
        children: new Set(["legend", "flow"])
    }],
    ["figcaption", {
        categories: new Set(["none"]),
        children: new Set(["flow"])
    }],
    ["figure", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["figcaption", "flow"])
    }],
    ["footer", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["flow"])
    }],
    ["form", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["flow"])
    }],
    ["h1", {
        categories: new Set(["flow", "heading", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["h2", {
        categories: new Set(["flow", "heading", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["h3", {
        categories: new Set(["flow", "heading", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["h4", {
        categories: new Set(["flow", "heading", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["h5", {
        categories: new Set(["flow", "heading", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["h6", {
        categories: new Set(["flow", "heading", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["head", {
        categories: new Set(["none"]),
        children: new Set(["metadata"])
    }],
    ["header", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["flow"])
    }],
    ["hgroup", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["h1", "h2", "h3", "h4", "h5", "h6", "p", "script-supporting"])
    }],
    ["hr", {
        categories: new Set(["flow", "select"]),
        children: new Set([])
    }],
    ["html", {
        categories: new Set(["none"]),
        children: new Set(["head", "body"])
    }],
    ["i", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["iframe", {
        categories: new Set(["flow", "phrasing", "embedded", "interactive", "palpable"]),
        children: new Set([])
    }],
    ["img", {
        categories: new Set(["flow", "phrasing", "embedded", "interactive", "form-associated", "palpable"]),
        children: new Set([])
    }],
    ["input", {
        categories: new Set(["flow", "phrasing", "interactive", "listed", "labelable", "submittable", "resettable", "form-associated", "palpable"]),
        children: new Set([])
    }],
    ["ins", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["transparent"])
    }],
    ["kbd", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["label", {
        categories: new Set(["flow", "phrasing", "interactive", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["legend", {
        categories: new Set(["none"]),
        children: new Set(["phrasing", "heading"])
    }],
    ["li", {
        categories: new Set(["none"]),
        children: new Set(["flow"])
    }],
    ["link", {
        categories: new Set(["metadata", "flow", "phrasing"]),
        children: new Set([])
    }],
    ["main", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["flow"])
    }],
    ["map", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["transparent", "area"])
    }],
    ["mark", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["menu", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["li", "script-supporting"])
    }],
    ["meta", {
        categories: new Set(["metadata", "flow", "phrasing"]),
        children: new Set([])
    }],
    ["meter", {
        categories: new Set(["flow", "phrasing", "labelable", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["nav", {
        categories: new Set(["flow", "sectioning", "palpable"]),
        children: new Set(["flow"])
    }],
    ["noscript", {
        categories: new Set(["metadata", "flow", "phrasing", "select", "optgroup"]),
        children: new Set(["varies"])
    }],
    ["object", {
        categories: new Set(["flow", "phrasing", "embedded", "interactive", "listed", "form-associated", "palpable"]),
        children: new Set(["transparent"])
    }],
    ["ol", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["li", "script-supporting"])
    }],
    ["optgroup", {
        categories: new Set(["select"]),
        children: new Set(["optgroup", "legend"])
    }],
    ["option", {
        categories: new Set(["select", "optgroup"]),
        children: new Set(["text", "option"])
    }],
    ["output", {
        categories: new Set(["flow", "phrasing", "listed", "labelable", "resettable", "form-associated", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["p", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["picture", {
        categories: new Set(["flow", "phrasing", "embedded", "palpable"]),
        children: new Set(["source", "one", "script-supporting"])
    }],
    ["pre", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["progress", {
        categories: new Set(["flow", "phrasing", "labelable", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["q", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["rp", {
        categories: new Set(["none"]),
        children: new Set(["text"])
    }],
    ["rt", {
        categories: new Set(["none"]),
        children: new Set(["phrasing"])
    }],
    ["ruby", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing", "rt", "rp"])
    }],
    ["s", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["samp", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["script", {
        categories: new Set(["metadata", "flow", "phrasing", "script-supporting"]),
        children: new Set(["text"])
    }],
    ["search", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["flow"])
    }],
    ["section", {
        categories: new Set(["flow", "sectioning", "palpable"]),
        children: new Set(["flow"])
    }],
    ["select", {
        categories: new Set(["flow", "phrasing", "interactive", "listed", "labelable", "submittable", "resettable", "form-associated", "palpable"]),
        children: new Set(["select", "button"])
    }],
    ["selectedcontent", {
        categories: new Set(["none"]),
        children: new Set([])
    }],
    ["slot", {
        categories: new Set(["flow", "phrasing"]),
        children: new Set(["transparent"])
    }],
    ["small", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["source", {
        categories: new Set(["none"]),
        children: new Set([])
    }],
    ["span", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["strong", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["style", {
        categories: new Set(["metadata"]),
        children: new Set(["text"])
    }],
    ["sub", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["summary", {
        categories: new Set(["none"]),
        children: new Set(["phrasing", "heading"])
    }],
    ["sup", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["table", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["caption", "colgroup", "thead", "tbody", "tfoot", "tr", "script-supporting"])
    }],
    ["tbody", {
        categories: new Set(["none"]),
        children: new Set(["tr", "script-supporting"])
    }],
    ["td", {
        categories: new Set(["none"]),
        children: new Set(["flow"])
    }],
    ["template", {
        categories: new Set(["metadata", "flow", "phrasing", "script-supporting"]),
        children: new Set([])
    }],
    ["textarea", {
        categories: new Set(["flow", "phrasing", "interactive", "listed", "labelable", "submittable", "resettable", "form-associated", "palpable"]),
        children: new Set(["text"])
    }],
    ["tfoot", {
        categories: new Set(["none"]),
        children: new Set(["tr", "script-supporting"])
    }],
    ["th", {
        categories: new Set(["interactive"]),
        children: new Set(["flow"])
    }],
    ["thead", {
        categories: new Set(["none"]),
        children: new Set(["tr", "script-supporting"])
    }],
    ["time", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["title", {
        categories: new Set(["metadata"]),
        children: new Set(["text"])
    }],
    ["tr", {
        categories: new Set(["none"]),
        children: new Set(["th", "td", "script-supporting"])
    }],
    ["track", {
        categories: new Set(["none"]),
        children: new Set([])
    }],
    ["u", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["ul", {
        categories: new Set(["flow", "palpable"]),
        children: new Set(["li", "script-supporting"])
    }],
    ["var", {
        categories: new Set(["flow", "phrasing", "palpable"]),
        children: new Set(["phrasing"])
    }],
    ["video", {
        categories: new Set(["flow", "phrasing", "embedded", "interactive", "palpable"]),
        children: new Set(["source", "track", "transparent"])
    }],
    ["wbr", {
        categories: new Set(["flow", "phrasing"]),
        children: new Set([])
    }]
    ]);
