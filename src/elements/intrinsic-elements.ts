export interface AriaAttributes {
    'role'?: StringAttribute;
    'aria-activedescendant'?: StringAttribute;
    'aria-atomic'?: StringAttribute;
    'aria-autocomplete'?: StringAttribute;
    'aria-busy'?: StringAttribute;
    'aria-checked'?: StringAttribute;
    'aria-colcount'?: StringAttribute;
    'aria-colindex'?: StringAttribute;
    'aria-colspan'?: StringAttribute;
    'aria-controls'?: StringAttribute;
    'aria-current'?: StringAttribute;
    'aria-describedby'?: StringAttribute;
    'aria-details'?: StringAttribute;
    'aria-disabled'?: StringAttribute;
    'aria-dropeffect'?: StringAttribute;
    'aria-errormessage'?: StringAttribute;
    'aria-expanded'?: StringAttribute;
    'aria-flowto'?: StringAttribute;
    'aria-grabbed'?: StringAttribute;
    'aria-haspopup'?: StringAttribute;
    'aria-hidden'?: StringAttribute;
    'aria-invalid'?: StringAttribute;
    'aria-keyshortcuts'?: StringAttribute;
    'aria-label'?: StringAttribute;
    'aria-labelledby'?: StringAttribute;
    'aria-level'?: StringAttribute;
    'aria-live'?: StringAttribute;
    'aria-modal'?: StringAttribute;
    'aria-multiline'?: StringAttribute;
    'aria-multiselectable'?: StringAttribute;
    'aria-orientation'?: StringAttribute;
    'aria-owns'?: StringAttribute;
    'aria-placeholder'?: StringAttribute;
    'aria-posinset'?: StringAttribute;
    'aria-pressed'?: StringAttribute;
    'aria-readonly'?: StringAttribute;
    'aria-relevant'?: StringAttribute;
    'aria-required'?: StringAttribute;
    'aria-roledescription'?: StringAttribute;
    'aria-rowcount'?: StringAttribute;
    'aria-rowindex'?: StringAttribute;
    'aria-rowspan'?: StringAttribute;
    'aria-selected'?: StringAttribute;
    'aria-setsize'?: StringAttribute;
    'aria-sort'?: StringAttribute;
    'aria-valuemax'?: StringAttribute;
    'aria-valuemin'?: StringAttribute;
    'aria-valuenow'?: StringAttribute;
    'aria-valuetext'?: StringAttribute;
}

export interface GlobalAttributes {
    accesskey?: StringAttribute;
    autocapitalize?: StringAttribute;
    autocorrect?: StringAttribute;
    autofocus?: BooleanAttribute;
    class?: StringAttribute;
    contenteditable?: StringAttribute;
    dir?: StringAttribute;
    draggable?: StringAttribute;
    enterkeyhint?: StringAttribute;
    hidden?: "hidden" | "until-found" | boolean;
    id?: StringAttribute;
    inert?: BooleanAttribute;
    inputmode?: StringAttribute;
    is?: StringAttribute;
    itemid?: StringAttribute;
    itemprop?: StringAttribute;
    itemref?: StringAttribute;
    itemscope?: BooleanAttribute;
    itemtype?: StringAttribute;
    lang?: StringAttribute;
    nonce?: StringAttribute;
    popover?: StringAttribute;
    slot?: StringAttribute;
    spellcheck?: StringAttribute;
    style?: StringAttribute;
    tabindex?: NumericAttribute;
    title?: StringAttribute;
    translate?: StringAttribute;
    writingsuggestions?: StringAttribute;
}

export interface GlobalEventHandlers {
    onauxclick?: string;
    onbeforeinput?: string;
    onbeforematch?: string;
    onbeforetoggle?: string;
    onblur?: string;
    oncancel?: string;
    oncanplay?: string;
    oncanplaythrough?: string;
    onchange?: string;
    onclick?: string;
    onclose?: string;
    oncommand?: string;
    oncontextlost?: string;
    oncontextmenu?: string;
    oncontextrestored?: string;
    oncopy?: string;
    oncuechange?: string;
    oncut?: string;
    ondblclick?: string;
    ondrag?: string;
    ondragend?: string;
    ondragenter?: string;
    ondragleave?: string;
    ondragover?: string;
    ondragstart?: string;
    ondrop?: string;
    ondurationchange?: string;
    onemptied?: string;
    onended?: string;
    onerror?: string;
    onfocus?: string;
    onformdata?: string;
    oninput?: string;
    oninvalid?: string;
    onkeydown?: string;
    onkeypress?: string;
    onkeyup?: string;
    onload?: string;
    onloadeddata?: string;
    onloadedmetadata?: string;
    onloadstart?: string;
    onmousedown?: string;
    onmouseenter?: string;
    onmouseleave?: string;
    onmousemove?: string;
    onmouseout?: string;
    onmouseover?: string;
    onmouseup?: string;
    onpaste?: string;
    onpause?: string;
    onplay?: string;
    onplaying?: string;
    onprogress?: string;
    onratechange?: string;
    onreset?: string;
    onresize?: string;
    onscroll?: string;
    onscrollend?: string;
    onsecuritypolicyviolation?: string;
    onseeked?: string;
    onseeking?: string;
    onselect?: string;
    onslotchange?: string;
    onstalled?: string;
    onsubmit?: string;
    onsuspend?: string;
    ontimeupdate?: string;
    ontoggle?: string;
    onvolumechange?: string;
    onwaiting?: string;
    onwheel?: string;
}

export interface BodyEventHandlers extends GlobalEventHandlers {
    onafterprint?: string;
    onbeforeprint?: string;
    onbeforeunload?: string;
    onhashchange?: string;
    onlanguagechange?: string;
    onmessage?: string;
    onmessageerror?: string;
    onoffline?: string;
    ononline?: string;
    onpagehide?: string;
    onpagereveal?: string;
    onpageshow?: string;
    onpageswap?: string;
    onpopstate?: string;
    onrejectionhandled?: string;
    onstorage?: string;
    onunhandledrejection?: string;
    onunload?: string;
}

export interface Renderable {
    render(): string;
}

export type TextContent = Renderable | string | number;
export type StringAttribute = Renderable | string | number | boolean;
export type NumericAttribute = Renderable | string | number;
export type BooleanAttribute = "true" | "false" | boolean;

export interface AnyContentCategory {
}

export interface HtmlTagA extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    download?: StringAttribute;
    href?: StringAttribute;
    hreflang?: StringAttribute;
    ping?: StringAttribute;
    referrerpolicy?: StringAttribute;
    rel?: StringAttribute;
    target?: StringAttribute;
    type?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagAbbr extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    title?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagAddress extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagArea extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    alt?: StringAttribute;
    coords?: NumericAttribute;
    download?: StringAttribute;
    href?: StringAttribute;
    ping?: StringAttribute;
    referrerpolicy?: StringAttribute;
    rel?: StringAttribute;
    shape?: StringAttribute;
    target?: StringAttribute;
    children?: never;
}

export interface HtmlTagArticle extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagAside extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagAudio extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    autoplay?: BooleanAttribute;
    controls?: BooleanAttribute;
    crossorigin?: StringAttribute;
    loop?: BooleanAttribute;
    muted?: BooleanAttribute;
    preload?: StringAttribute;
    src?: StringAttribute;
    children?: HtmlTagSource | HtmlTagTrack | AnyContentCategory | (HtmlTagSource | HtmlTagTrack | AnyContentCategory)[];
}

export interface HtmlTagB extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagBase extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    href?: StringAttribute;
    target?: StringAttribute;
    children?: never;
}

export interface HtmlTagBdi extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagBdo extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    dir?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagBlockquote extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    cite?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagBody extends GlobalAttributes, AriaAttributes, BodyEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagBr extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: never;
}

export interface HtmlTagButton extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    command?: StringAttribute;
    commandfor?: StringAttribute;
    disabled?: BooleanAttribute;
    form?: StringAttribute;
    formaction?: StringAttribute;
    formenctype?: StringAttribute;
    formmethod?: StringAttribute;
    formnovalidate?: BooleanAttribute;
    formtarget?: StringAttribute;
    name?: StringAttribute;
    popovertarget?: StringAttribute;
    popovertargetaction?: StringAttribute;
    type?: StringAttribute;
    value?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagCanvas extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    height?: NumericAttribute;
    width?: NumericAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagCaption extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagCite extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagCode extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagCol extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    span?: NumericAttribute;
    children?: never;
}

export interface HtmlTagColgroup extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    span?: NumericAttribute;
    children?: HtmlTagCol | HtmlTagTemplate | (HtmlTagCol | HtmlTagTemplate)[];
}

export interface HtmlTagData extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    value?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagDatalist extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | HtmlTagOption | (AnyContentCategory | HtmlTagOption)[];
}

export interface HtmlTagDd extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagDel extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    cite?: StringAttribute;
    datetime?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagDetails extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    name?: StringAttribute;
    open?: BooleanAttribute;
    children?: HtmlTagSummary | AnyContentCategory | (HtmlTagSummary | AnyContentCategory)[];
}

export interface HtmlTagDfn extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    title?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagDialog extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    closedby?: StringAttribute;
    open?: BooleanAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagDiv extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagDl extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: HtmlTagDt | HtmlTagDd | HtmlTagDiv | AnyContentCategory | (HtmlTagDt | HtmlTagDd | HtmlTagDiv | AnyContentCategory)[];
}

export interface HtmlTagDt extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagEm extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagEmbed extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    height?: NumericAttribute;
    src?: StringAttribute;
    type?: StringAttribute;
    width?: NumericAttribute;
    children?: never;
}

export interface HtmlTagFieldset extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    disabled?: BooleanAttribute;
    form?: StringAttribute;
    name?: StringAttribute;
    children?: HtmlTagLegend | AnyContentCategory | (HtmlTagLegend | AnyContentCategory)[];
}

export interface HtmlTagFigcaption extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagFigure extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: HtmlTagFigcaption | AnyContentCategory | (HtmlTagFigcaption | AnyContentCategory)[];
}

export interface HtmlTagFooter extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagForm extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    acceptCharset?: StringAttribute;
    action?: StringAttribute;
    autocomplete?: StringAttribute;
    enctype?: StringAttribute;
    method?: StringAttribute;
    name?: StringAttribute;
    novalidate?: BooleanAttribute;
    target?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagH1 extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagH2 extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagH3 extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagH4 extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagH5 extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagH6 extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagHead extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagHeader extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagHgroup extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: HtmlTagH1 | HtmlTagH2 | HtmlTagH3 | HtmlTagH4 | HtmlTagH5 | HtmlTagH6 | AnyContentCategory | (HtmlTagH1 | HtmlTagH2 | HtmlTagH3 | HtmlTagH4 | HtmlTagH5 | HtmlTagH6 | AnyContentCategory)[];
}

export interface HtmlTagHr extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: never;
}

export interface HtmlTagHtml extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: HtmlTagHead | HtmlTagBody | (HtmlTagHead | HtmlTagBody)[];
}

export interface HtmlTagI extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagIframe extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    allow?: StringAttribute;
    allowfullscreen?: BooleanAttribute;
    height?: NumericAttribute;
    loading?: StringAttribute;
    name?: StringAttribute;
    referrerpolicy?: StringAttribute;
    sandbox?: StringAttribute;
    src?: StringAttribute;
    srcdoc?: StringAttribute;
    width?: NumericAttribute;
    children?: never;
}

export interface HtmlTagImg extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    alt?: StringAttribute;
    crossorigin?: StringAttribute;
    decoding?: StringAttribute;
    fetchpriority?: StringAttribute;
    height?: NumericAttribute;
    ismap?: BooleanAttribute;
    loading?: StringAttribute;
    referrerpolicy?: StringAttribute;
    sizes?: StringAttribute;
    src?: StringAttribute;
    srcset?: StringAttribute;
    usemap?: StringAttribute;
    width?: NumericAttribute;
    children?: never;
}

export interface HtmlTagInput extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    accept?: StringAttribute;
    alpha?: BooleanAttribute;
    alt?: StringAttribute;
    autocomplete?: StringAttribute;
    checked?: BooleanAttribute;
    colorspace?: StringAttribute;
    dirname?: StringAttribute;
    disabled?: BooleanAttribute;
    form?: StringAttribute;
    formaction?: StringAttribute;
    formenctype?: StringAttribute;
    formmethod?: StringAttribute;
    formnovalidate?: BooleanAttribute;
    formtarget?: StringAttribute;
    height?: NumericAttribute;
    list?: StringAttribute;
    max?: StringAttribute;
    maxlength?: NumericAttribute;
    min?: StringAttribute;
    minlength?: NumericAttribute;
    multiple?: BooleanAttribute;
    name?: StringAttribute;
    pattern?: StringAttribute;
    placeholder?: StringAttribute;
    popovertarget?: StringAttribute;
    popovertargetaction?: StringAttribute;
    readonly?: BooleanAttribute;
    required?: BooleanAttribute;
    size?: NumericAttribute;
    src?: StringAttribute;
    step?: NumericAttribute;
    title?: StringAttribute;
    type?: StringAttribute;
    value?: StringAttribute;
    width?: NumericAttribute;
    children?: never;
}

export interface HtmlTagIns extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    cite?: StringAttribute;
    datetime?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagKbd extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagLabel extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    for?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagLegend extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagLi extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    value?: NumericAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagLink extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    as?: StringAttribute;
    blocking?: StringAttribute;
    color?: StringAttribute;
    crossorigin?: StringAttribute;
    disabled?: BooleanAttribute;
    fetchpriority?: StringAttribute;
    href?: StringAttribute;
    hreflang?: StringAttribute;
    imagesizes?: StringAttribute;
    imagesrcset?: StringAttribute;
    integrity?: StringAttribute;
    media?: StringAttribute;
    referrerpolicy?: StringAttribute;
    rel?: StringAttribute;
    sizes?: StringAttribute;
    title?: StringAttribute;
    type?: StringAttribute;
    children?: never;
}

export interface HtmlTagMain extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagMap extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    name?: StringAttribute;
    children?: AnyContentCategory | HtmlTagArea | (AnyContentCategory | HtmlTagArea)[];
}

export interface HtmlTagMark extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagMenu extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: HtmlTagLi | AnyContentCategory | (HtmlTagLi | AnyContentCategory)[];
}

export interface HtmlTagMeta extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    charset?: StringAttribute;
    content?: StringAttribute;
    httpEquiv?: StringAttribute;
    media?: StringAttribute;
    name?: StringAttribute;
    children?: never;
}

export interface HtmlTagMeter extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    high?: NumericAttribute;
    low?: NumericAttribute;
    max?: NumericAttribute;
    min?: NumericAttribute;
    optimum?: NumericAttribute;
    value?: NumericAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagNav extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagNoscript extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: never;
}

export interface HtmlTagObject extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    data?: StringAttribute;
    form?: StringAttribute;
    height?: NumericAttribute;
    name?: StringAttribute;
    type?: StringAttribute;
    width?: NumericAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagOl extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    reversed?: BooleanAttribute;
    start?: NumericAttribute;
    type?: StringAttribute;
    children?: HtmlTagLi | AnyContentCategory | (HtmlTagLi | AnyContentCategory)[];
}

export interface HtmlTagOptgroup extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    disabled?: BooleanAttribute;
    label?: StringAttribute;
    children?: HtmlTagOption | AnyContentCategory | (HtmlTagOption | AnyContentCategory)[];
}

export interface HtmlTagOption extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    disabled?: BooleanAttribute;
    label?: StringAttribute;
    selected?: BooleanAttribute;
    value?: StringAttribute;
    children?: TextContent | (TextContent)[];
}

export interface HtmlTagOutput extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    for?: StringAttribute;
    form?: StringAttribute;
    name?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagP extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagPicture extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: HtmlTagSource | AnyContentCategory | (HtmlTagSource | AnyContentCategory)[];
}

export interface HtmlTagPre extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagProgress extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    max?: NumericAttribute;
    value?: NumericAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagQ extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    cite?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagRp extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: TextContent | (TextContent)[];
}

export interface HtmlTagRt extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagRuby extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | HtmlTagRt | HtmlTagRp | (AnyContentCategory | HtmlTagRt | HtmlTagRp)[];
}

export interface HtmlTagS extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagSamp extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagScript extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    async?: BooleanAttribute;
    blocking?: StringAttribute;
    crossorigin?: StringAttribute;
    defer?: BooleanAttribute;
    fetchpriority?: StringAttribute;
    integrity?: StringAttribute;
    nomodule?: BooleanAttribute;
    referrerpolicy?: StringAttribute;
    src?: StringAttribute;
    type?: StringAttribute;
    children?: TextContent | (TextContent)[];
}

export interface HtmlTagSearch extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagSection extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagSelect extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    autocomplete?: StringAttribute;
    disabled?: BooleanAttribute;
    form?: StringAttribute;
    multiple?: BooleanAttribute;
    name?: StringAttribute;
    required?: BooleanAttribute;
    size?: NumericAttribute;
    children?: HtmlTagOption | HtmlTagOptgroup | AnyContentCategory | (HtmlTagOption | HtmlTagOptgroup | AnyContentCategory)[];
}

export interface HtmlTagSlot extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    name?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagSmall extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagSource extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    height?: NumericAttribute;
    media?: StringAttribute;
    sizes?: StringAttribute;
    src?: StringAttribute;
    srcset?: StringAttribute;
    type?: StringAttribute;
    width?: NumericAttribute;
    children?: never;
}

export interface HtmlTagSpan extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagStrong extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagStyle extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    blocking?: StringAttribute;
    media?: StringAttribute;
    title?: StringAttribute;
    children?: TextContent | (TextContent)[];
}

export interface HtmlTagSub extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagSummary extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagSup extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagTable extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: HtmlTagCaption | HtmlTagColgroup | HtmlTagThead | HtmlTagTbody | HtmlTagTfoot | HtmlTagTr | AnyContentCategory | (HtmlTagCaption | HtmlTagColgroup | HtmlTagThead | HtmlTagTbody | HtmlTagTfoot | HtmlTagTr | AnyContentCategory)[];
}

export interface HtmlTagTbody extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: HtmlTagTr | AnyContentCategory | (HtmlTagTr | AnyContentCategory)[];
}

export interface HtmlTagTd extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    colspan?: NumericAttribute;
    headers?: StringAttribute;
    rowspan?: NumericAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagTemplate extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    shadowrootclonable?: BooleanAttribute;
    shadowrootcustomelementregistry?: BooleanAttribute;
    shadowrootdelegatesfocus?: BooleanAttribute;
    shadowrootmode?: StringAttribute;
    shadowrootserializable?: BooleanAttribute;
    children?: never;
}

export interface HtmlTagTextarea extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    autocomplete?: StringAttribute;
    cols?: NumericAttribute;
    dirname?: StringAttribute;
    disabled?: BooleanAttribute;
    form?: StringAttribute;
    maxlength?: NumericAttribute;
    minlength?: NumericAttribute;
    name?: StringAttribute;
    placeholder?: StringAttribute;
    readonly?: BooleanAttribute;
    required?: BooleanAttribute;
    rows?: NumericAttribute;
    wrap?: StringAttribute;
    children?: TextContent | (TextContent)[];
}

export interface HtmlTagTfoot extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: HtmlTagTr | AnyContentCategory | (HtmlTagTr | AnyContentCategory)[];
}

export interface HtmlTagTh extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    abbr?: StringAttribute;
    colspan?: NumericAttribute;
    headers?: StringAttribute;
    rowspan?: NumericAttribute;
    scope?: StringAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagThead extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: HtmlTagTr | AnyContentCategory | (HtmlTagTr | AnyContentCategory)[];
}

export interface HtmlTagTime extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    datetime?: NumericAttribute;
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagTitle extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: TextContent | (TextContent)[];
}

export interface HtmlTagTr extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: HtmlTagTh | HtmlTagTd | AnyContentCategory | (HtmlTagTh | HtmlTagTd | AnyContentCategory)[];
}

export interface HtmlTagTrack extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    default?: BooleanAttribute;
    kind?: StringAttribute;
    label?: StringAttribute;
    src?: StringAttribute;
    srclang?: StringAttribute;
    children?: never;
}

export interface HtmlTagU extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagUl extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: HtmlTagLi | AnyContentCategory | (HtmlTagLi | AnyContentCategory)[];
}

export interface HtmlTagVar extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: AnyContentCategory | (AnyContentCategory)[];
}

export interface HtmlTagVideo extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    autoplay?: BooleanAttribute;
    controls?: BooleanAttribute;
    crossorigin?: StringAttribute;
    height?: NumericAttribute;
    loop?: BooleanAttribute;
    muted?: BooleanAttribute;
    playsinline?: BooleanAttribute;
    poster?: StringAttribute;
    preload?: StringAttribute;
    src?: StringAttribute;
    width?: NumericAttribute;
    children?: HtmlTagSource | HtmlTagTrack | AnyContentCategory | (HtmlTagSource | HtmlTagTrack | AnyContentCategory)[];
}

export interface HtmlTagWbr extends GlobalAttributes, AriaAttributes, GlobalEventHandlers {
    children?: never;
}

export namespace JSX {
    export interface IntrinsicElements {
        a: HtmlTagA;
        abbr: HtmlTagAbbr;
        address: HtmlTagAddress;
        area: HtmlTagArea;
        article: HtmlTagArticle;
        aside: HtmlTagAside;
        audio: HtmlTagAudio;
        b: HtmlTagB;
        base: HtmlTagBase;
        bdi: HtmlTagBdi;
        bdo: HtmlTagBdo;
        blockquote: HtmlTagBlockquote;
        body: HtmlTagBody;
        br: HtmlTagBr;
        button: HtmlTagButton;
        canvas: HtmlTagCanvas;
        caption: HtmlTagCaption;
        cite: HtmlTagCite;
        code: HtmlTagCode;
        col: HtmlTagCol;
        colgroup: HtmlTagColgroup;
        data: HtmlTagData;
        datalist: HtmlTagDatalist;
        dd: HtmlTagDd;
        del: HtmlTagDel;
        details: HtmlTagDetails;
        dfn: HtmlTagDfn;
        dialog: HtmlTagDialog;
        div: HtmlTagDiv;
        dl: HtmlTagDl;
        dt: HtmlTagDt;
        em: HtmlTagEm;
        embed: HtmlTagEmbed;
        fieldset: HtmlTagFieldset;
        figcaption: HtmlTagFigcaption;
        figure: HtmlTagFigure;
        footer: HtmlTagFooter;
        form: HtmlTagForm;
        h1: HtmlTagH1;
        h2: HtmlTagH2;
        h3: HtmlTagH3;
        h4: HtmlTagH4;
        h5: HtmlTagH5;
        h6: HtmlTagH6;
        head: HtmlTagHead;
        header: HtmlTagHeader;
        hgroup: HtmlTagHgroup;
        hr: HtmlTagHr;
        html: HtmlTagHtml;
        i: HtmlTagI;
        iframe: HtmlTagIframe;
        img: HtmlTagImg;
        input: HtmlTagInput;
        ins: HtmlTagIns;
        kbd: HtmlTagKbd;
        label: HtmlTagLabel;
        legend: HtmlTagLegend;
        li: HtmlTagLi;
        link: HtmlTagLink;
        main: HtmlTagMain;
        map: HtmlTagMap;
        mark: HtmlTagMark;
        menu: HtmlTagMenu;
        meta: HtmlTagMeta;
        meter: HtmlTagMeter;
        nav: HtmlTagNav;
        noscript: HtmlTagNoscript;
        object: HtmlTagObject;
        ol: HtmlTagOl;
        optgroup: HtmlTagOptgroup;
        option: HtmlTagOption;
        output: HtmlTagOutput;
        p: HtmlTagP;
        picture: HtmlTagPicture;
        pre: HtmlTagPre;
        progress: HtmlTagProgress;
        q: HtmlTagQ;
        rp: HtmlTagRp;
        rt: HtmlTagRt;
        ruby: HtmlTagRuby;
        s: HtmlTagS;
        samp: HtmlTagSamp;
        script: HtmlTagScript;
        search: HtmlTagSearch;
        section: HtmlTagSection;
        select: HtmlTagSelect;
        slot: HtmlTagSlot;
        small: HtmlTagSmall;
        source: HtmlTagSource;
        span: HtmlTagSpan;
        strong: HtmlTagStrong;
        style: HtmlTagStyle;
        sub: HtmlTagSub;
        summary: HtmlTagSummary;
        sup: HtmlTagSup;
        table: HtmlTagTable;
        tbody: HtmlTagTbody;
        td: HtmlTagTd;
        template: HtmlTagTemplate;
        textarea: HtmlTagTextarea;
        tfoot: HtmlTagTfoot;
        th: HtmlTagTh;
        thead: HtmlTagThead;
        time: HtmlTagTime;
        title: HtmlTagTitle;
        tr: HtmlTagTr;
        track: HtmlTagTrack;
        u: HtmlTagU;
        ul: HtmlTagUl;
        var: HtmlTagVar;
        video: HtmlTagVideo;
        wbr: HtmlTagWbr;
    }
}
