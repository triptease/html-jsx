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

export interface FlowContentCategory {
}

export interface PhrasingContentCategory {
}

export interface InteractiveContentCategory {
}

export interface PalpableContentCategory {
}

export interface SectioningContentCategory {
}

export interface EmbeddedContentCategory {
}

export interface MetadataContentCategory {
}

export interface NoneContentCategory {
}

export interface ListedContentCategory {
}

export interface LabelableContentCategory {
}

export interface SubmittableContentCategory {
}

export interface FormAssociatedContentCategory {
}

export interface HeadingContentCategory {
}

export interface ResettableContentCategory {
}

export interface ScriptSupportingContentCategory {
}

export interface HtmlTagA extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, InteractiveContentCategory, PalpableContentCategory {
    download?: StringAttribute;
    href?: StringAttribute;
    hreflang?: StringAttribute;
    ping?: StringAttribute;
    referrerpolicy?: StringAttribute;
    rel?: StringAttribute;
    target?: StringAttribute;
    type?: StringAttribute;
    children?: AnyContentCategory | TextContent | (AnyContentCategory | TextContent)[];
}

export interface HtmlTagAbbr extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    title?: StringAttribute;
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagAddress extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagArea extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory {
    alt?: StringAttribute;
    coords?: NumericAttribute;
    download?: StringAttribute;
    href?: StringAttribute;
    ping?: StringAttribute;
    referrerpolicy?: StringAttribute;
    rel?: StringAttribute;
    shape?: StringAttribute;
    target?: StringAttribute;
    children?: never | (never)[];
}

export interface HtmlTagArticle extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, SectioningContentCategory, PalpableContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagAside extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, SectioningContentCategory, PalpableContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagAudio extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, EmbeddedContentCategory, InteractiveContentCategory, PalpableContentCategory {
    autoplay?: BooleanAttribute;
    controls?: BooleanAttribute;
    crossorigin?: StringAttribute;
    loop?: BooleanAttribute;
    muted?: BooleanAttribute;
    preload?: StringAttribute;
    src?: StringAttribute;
    children?: AnyContentCategory | TextContent | (AnyContentCategory | TextContent)[];
}

export interface HtmlTagB extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagBase extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, MetadataContentCategory {
    href?: StringAttribute;
    target?: StringAttribute;
    children?: never | (never)[];
}

export interface HtmlTagBdi extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagBdo extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    dir?: StringAttribute;
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagBlockquote extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    cite?: StringAttribute;
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagBody extends GlobalAttributes, AriaAttributes, BodyEventHandlers, NoneContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagBr extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory {
    children?: never | (never)[];
}

export interface HtmlTagButton extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, InteractiveContentCategory, ListedContentCategory, LabelableContentCategory, SubmittableContentCategory, FormAssociatedContentCategory, PalpableContentCategory {
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
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagCanvas extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, EmbeddedContentCategory, PalpableContentCategory {
    height?: NumericAttribute;
    width?: NumericAttribute;
    children?: AnyContentCategory | TextContent | (AnyContentCategory | TextContent)[];
}

export interface HtmlTagCaption extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagCite extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagCode extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagCol extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    span?: NumericAttribute;
    children?: never | (never)[];
}

export interface HtmlTagColgroup extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    span?: NumericAttribute;
    children?: HtmlTagCol | HtmlTagTemplate | (HtmlTagCol | HtmlTagTemplate)[];
}

export interface HtmlTagData extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    value?: StringAttribute;
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagDatalist extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory {
    children?: PhrasingContentCategory | TextContent | HtmlTagOption | ScriptSupportingContentCategory | (PhrasingContentCategory | TextContent | HtmlTagOption | ScriptSupportingContentCategory)[];
}

export interface HtmlTagDd extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagDel extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    cite?: StringAttribute;
    datetime?: StringAttribute;
    children?: AnyContentCategory | TextContent | (AnyContentCategory | TextContent)[];
}

export interface HtmlTagDetails extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, InteractiveContentCategory, PalpableContentCategory {
    name?: StringAttribute;
    open?: BooleanAttribute;
    children?: HtmlTagSummary | FlowContentCategory | TextContent | (HtmlTagSummary | FlowContentCategory | TextContent)[];
}

export interface HtmlTagDfn extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    title?: StringAttribute;
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagDialog extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory {
    closedby?: StringAttribute;
    open?: BooleanAttribute;
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagDiv extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagDl extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: HtmlTagDt | HtmlTagDd | HtmlTagDiv | ScriptSupportingContentCategory | (HtmlTagDt | HtmlTagDd | HtmlTagDiv | ScriptSupportingContentCategory)[];
}

export interface HtmlTagDt extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagEm extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagEmbed extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, EmbeddedContentCategory, InteractiveContentCategory, PalpableContentCategory {
    height?: NumericAttribute;
    src?: StringAttribute;
    type?: StringAttribute;
    width?: NumericAttribute;
    children?: never | (never)[];
}

export interface HtmlTagFieldset extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, ListedContentCategory, FormAssociatedContentCategory, PalpableContentCategory {
    disabled?: BooleanAttribute;
    form?: StringAttribute;
    name?: StringAttribute;
    children?: HtmlTagLegend | FlowContentCategory | TextContent | (HtmlTagLegend | FlowContentCategory | TextContent)[];
}

export interface HtmlTagFigcaption extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagFigure extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: HtmlTagFigcaption | FlowContentCategory | TextContent | (HtmlTagFigcaption | FlowContentCategory | TextContent)[];
}

export interface HtmlTagFooter extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagForm extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    acceptCharset?: StringAttribute;
    action?: StringAttribute;
    autocomplete?: StringAttribute;
    enctype?: StringAttribute;
    method?: StringAttribute;
    name?: StringAttribute;
    novalidate?: BooleanAttribute;
    target?: StringAttribute;
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagH1 extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, HeadingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagH2 extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, HeadingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagH3 extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, HeadingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagH4 extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, HeadingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagH5 extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, HeadingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagH6 extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, HeadingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagHead extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: MetadataContentCategory | (MetadataContentCategory)[];
}

export interface HtmlTagHeader extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagHgroup extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: HtmlTagH1 | HtmlTagH2 | HtmlTagH3 | HtmlTagH4 | HtmlTagH5 | HtmlTagH6 | ScriptSupportingContentCategory | (HtmlTagH1 | HtmlTagH2 | HtmlTagH3 | HtmlTagH4 | HtmlTagH5 | HtmlTagH6 | ScriptSupportingContentCategory)[];
}

export interface HtmlTagHr extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory {
    children?: never | (never)[];
}

export interface HtmlTagHtml extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: HtmlTagHead | HtmlTagBody | (HtmlTagHead | HtmlTagBody)[];
}

export interface HtmlTagI extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagIframe extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, EmbeddedContentCategory, InteractiveContentCategory, PalpableContentCategory {
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
    children?: never | (never)[];
}

export interface HtmlTagImg extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, EmbeddedContentCategory, InteractiveContentCategory, FormAssociatedContentCategory, PalpableContentCategory {
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
    children?: never | (never)[];
}

export interface HtmlTagInput extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, InteractiveContentCategory, ListedContentCategory, LabelableContentCategory, SubmittableContentCategory, ResettableContentCategory, FormAssociatedContentCategory, PalpableContentCategory {
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
    children?: never | (never)[];
}

export interface HtmlTagIns extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    cite?: StringAttribute;
    datetime?: StringAttribute;
    children?: AnyContentCategory | TextContent | (AnyContentCategory | TextContent)[];
}

export interface HtmlTagKbd extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagLabel extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, InteractiveContentCategory, PalpableContentCategory {
    for?: StringAttribute;
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagLegend extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: PhrasingContentCategory | TextContent | HeadingContentCategory | (PhrasingContentCategory | TextContent | HeadingContentCategory)[];
}

export interface HtmlTagLi extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    value?: NumericAttribute;
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagLink extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, MetadataContentCategory, FlowContentCategory, PhrasingContentCategory {
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
    children?: never | (never)[];
}

export interface HtmlTagMain extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagMap extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    name?: StringAttribute;
    children?: AnyContentCategory | TextContent | (AnyContentCategory | TextContent)[];
}

export interface HtmlTagMark extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagMenu extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: HtmlTagLi | ScriptSupportingContentCategory | (HtmlTagLi | ScriptSupportingContentCategory)[];
}

export interface HtmlTagMeta extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, MetadataContentCategory, FlowContentCategory, PhrasingContentCategory {
    charset?: StringAttribute;
    content?: StringAttribute;
    httpEquiv?: StringAttribute;
    media?: StringAttribute;
    name?: StringAttribute;
    children?: never | (never)[];
}

export interface HtmlTagMeter extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, LabelableContentCategory, PalpableContentCategory {
    high?: NumericAttribute;
    low?: NumericAttribute;
    max?: NumericAttribute;
    min?: NumericAttribute;
    optimum?: NumericAttribute;
    value?: NumericAttribute;
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagNav extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, SectioningContentCategory, PalpableContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagNoscript extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, MetadataContentCategory, FlowContentCategory, PhrasingContentCategory {
    children?: never | (never)[];
}

export interface HtmlTagObject extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, EmbeddedContentCategory, InteractiveContentCategory, ListedContentCategory, FormAssociatedContentCategory, PalpableContentCategory {
    data?: StringAttribute;
    form?: StringAttribute;
    height?: NumericAttribute;
    name?: StringAttribute;
    type?: StringAttribute;
    width?: NumericAttribute;
    children?: AnyContentCategory | TextContent | (AnyContentCategory | TextContent)[];
}

export interface HtmlTagOl extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    reversed?: BooleanAttribute;
    start?: NumericAttribute;
    type?: StringAttribute;
    children?: HtmlTagLi | ScriptSupportingContentCategory | (HtmlTagLi | ScriptSupportingContentCategory)[];
}

export interface HtmlTagOptgroup extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    disabled?: BooleanAttribute;
    label?: StringAttribute;
    children?: HtmlTagOption | ScriptSupportingContentCategory | (HtmlTagOption | ScriptSupportingContentCategory)[];
}

export interface HtmlTagOption extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    disabled?: BooleanAttribute;
    label?: StringAttribute;
    selected?: BooleanAttribute;
    value?: StringAttribute;
    children?: TextContent | (TextContent)[];
}

export interface HtmlTagOutput extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, ListedContentCategory, LabelableContentCategory, ResettableContentCategory, FormAssociatedContentCategory, PalpableContentCategory {
    for?: StringAttribute;
    form?: StringAttribute;
    name?: StringAttribute;
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagP extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagPicture extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, EmbeddedContentCategory, PalpableContentCategory {
    children?: HtmlTagSource | ScriptSupportingContentCategory | (HtmlTagSource | ScriptSupportingContentCategory)[];
}

export interface HtmlTagPre extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagProgress extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, LabelableContentCategory, PalpableContentCategory {
    max?: NumericAttribute;
    value?: NumericAttribute;
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagQ extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    cite?: StringAttribute;
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagRp extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: TextContent | (TextContent)[];
}

export interface HtmlTagRt extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagRuby extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | HtmlTagRt | HtmlTagRp | (PhrasingContentCategory | TextContent | HtmlTagRt | HtmlTagRp)[];
}

export interface HtmlTagS extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagSamp extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagScript extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, MetadataContentCategory, FlowContentCategory, PhrasingContentCategory, ScriptSupportingContentCategory {
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

export interface HtmlTagSearch extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagSection extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, SectioningContentCategory, PalpableContentCategory {
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagSelect extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, InteractiveContentCategory, ListedContentCategory, LabelableContentCategory, SubmittableContentCategory, ResettableContentCategory, FormAssociatedContentCategory, PalpableContentCategory {
    autocomplete?: StringAttribute;
    disabled?: BooleanAttribute;
    form?: StringAttribute;
    multiple?: BooleanAttribute;
    name?: StringAttribute;
    required?: BooleanAttribute;
    size?: NumericAttribute;
    children?: HtmlTagOption | HtmlTagOptgroup | ScriptSupportingContentCategory | (HtmlTagOption | HtmlTagOptgroup | ScriptSupportingContentCategory)[];
}

export interface HtmlTagSlot extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory {
    name?: StringAttribute;
    children?: AnyContentCategory | TextContent | (AnyContentCategory | TextContent)[];
}

export interface HtmlTagSmall extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagSource extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    height?: NumericAttribute;
    media?: StringAttribute;
    sizes?: StringAttribute;
    src?: StringAttribute;
    srcset?: StringAttribute;
    type?: StringAttribute;
    width?: NumericAttribute;
    children?: never | (never)[];
}

export interface HtmlTagSpan extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagStrong extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagStyle extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, MetadataContentCategory {
    blocking?: StringAttribute;
    media?: StringAttribute;
    title?: StringAttribute;
    children?: TextContent | (TextContent)[];
}

export interface HtmlTagSub extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagSummary extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: PhrasingContentCategory | TextContent | HeadingContentCategory | (PhrasingContentCategory | TextContent | HeadingContentCategory)[];
}

export interface HtmlTagSup extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagTable extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: HtmlTagCaption | HtmlTagColgroup | HtmlTagThead | HtmlTagTbody | HtmlTagTfoot | HtmlTagTr | ScriptSupportingContentCategory | (HtmlTagCaption | HtmlTagColgroup | HtmlTagThead | HtmlTagTbody | HtmlTagTfoot | HtmlTagTr | ScriptSupportingContentCategory)[];
}

export interface HtmlTagTbody extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: HtmlTagTr | ScriptSupportingContentCategory | (HtmlTagTr | ScriptSupportingContentCategory)[];
}

export interface HtmlTagTd extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    colspan?: NumericAttribute;
    headers?: StringAttribute;
    rowspan?: NumericAttribute;
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagTemplate extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, MetadataContentCategory, FlowContentCategory, PhrasingContentCategory, ScriptSupportingContentCategory {
    shadowrootclonable?: BooleanAttribute;
    shadowrootcustomelementregistry?: BooleanAttribute;
    shadowrootdelegatesfocus?: BooleanAttribute;
    shadowrootmode?: StringAttribute;
    shadowrootserializable?: BooleanAttribute;
    children?: never | (never)[];
}

export interface HtmlTagTextarea extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, InteractiveContentCategory, ListedContentCategory, LabelableContentCategory, SubmittableContentCategory, ResettableContentCategory, FormAssociatedContentCategory, PalpableContentCategory {
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

export interface HtmlTagTfoot extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: HtmlTagTr | ScriptSupportingContentCategory | (HtmlTagTr | ScriptSupportingContentCategory)[];
}

export interface HtmlTagTh extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, InteractiveContentCategory {
    abbr?: StringAttribute;
    colspan?: NumericAttribute;
    headers?: StringAttribute;
    rowspan?: NumericAttribute;
    scope?: StringAttribute;
    children?: FlowContentCategory | TextContent | (FlowContentCategory | TextContent)[];
}

export interface HtmlTagThead extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: HtmlTagTr | ScriptSupportingContentCategory | (HtmlTagTr | ScriptSupportingContentCategory)[];
}

export interface HtmlTagTime extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    datetime?: NumericAttribute;
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagTitle extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, MetadataContentCategory {
    children?: TextContent | (TextContent)[];
}

export interface HtmlTagTr extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    children?: HtmlTagTh | HtmlTagTd | ScriptSupportingContentCategory | (HtmlTagTh | HtmlTagTd | ScriptSupportingContentCategory)[];
}

export interface HtmlTagTrack extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, NoneContentCategory {
    default?: BooleanAttribute;
    kind?: StringAttribute;
    label?: StringAttribute;
    src?: StringAttribute;
    srclang?: StringAttribute;
    children?: never | (never)[];
}

export interface HtmlTagU extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagUl extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PalpableContentCategory {
    children?: HtmlTagLi | ScriptSupportingContentCategory | (HtmlTagLi | ScriptSupportingContentCategory)[];
}

export interface HtmlTagVar extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, PalpableContentCategory {
    children?: PhrasingContentCategory | TextContent | (PhrasingContentCategory | TextContent)[];
}

export interface HtmlTagVideo extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory, EmbeddedContentCategory, InteractiveContentCategory, PalpableContentCategory {
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
    children?: AnyContentCategory | TextContent | (AnyContentCategory | TextContent)[];
}

export interface HtmlTagWbr extends GlobalAttributes, AriaAttributes, GlobalEventHandlers, FlowContentCategory, PhrasingContentCategory {
    children?: never | (never)[];
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
