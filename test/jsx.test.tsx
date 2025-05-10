import {raw, Children, PhrasingContentCategory, Renderable} from '@triptease/html-jsx';
import {jsx} from "@triptease/html-jsx/jsx-runtime";

describe('elements', () => {
    it('renders an element', () => {
        expect(`${(<p>Foo</p>)}`).toEqual('<p>Foo</p>');
    });

    it('renders an element with children', () => {
        expect(
            `${(
                <div>
                    <p>Foo</p>
                    <p>Bar</p>
                </div>
            )}`,
        ).toEqual('<div><p>Foo</p><p>Bar</p></div>');
    });

    it('escapes content', () => {
        const maliciousContent = '<script>alert(\'XSS\')</script>';
        expect(
            `${(
                <div>
                    <p>{maliciousContent}</p>
                </div>
            )}`,
        ).toEqual('<div><p>&lt;script&gt;alert(&#39;XSS&#39;)&lt;&#x2F;script&gt;</p></div>');
    });

    it('raw content is not escaped', () => {
        const content = '<script>alert(\'trusted\')</script>';
        expect(
            `${(
                <div>
                    <p>{raw(content)}</p>
                </div>
            )}`,
        ).toEqual('<div><p><script>alert(\'trusted\')</script></p></div>');
    });

    it.each([[false], [true], [null], [undefined]])(`%s is not rendered`, (value) => {
        expect(`${(<>{value}</>)}`).toEqual('');
    });

    it(`numeric content %s is rendered as a string`, () => {
        expect(`${(<span>{99}</span>)}`).toEqual('<span>99</span>');
    });

    it('renderable content is respected', () => {
        class MyRenderable implements Renderable {
            render = () => 'Custom rendering';
        }

        expect(`${(<span>{new MyRenderable()}</span>)}`).toEqual('<span>Custom rendering</span>');
    });

    it('renders a web component with custom attributes', () => {
        expect(`${(<some-web-component someAttribute="data">Foo</some-web-component>)}`).toEqual(
            '<some-web-component some-attribute="data">Foo</some-web-component>',
        );
    });

    it('arrays of elements are flatten', () => {
        const arrayOfElements = [
            <p>Foo</p>,
            <p>Bar</p>,
        ];
        const element = <p>Baz</p>;
        expect(`${<div>{arrayOfElements}{element}</div>}`).toEqual('<div><p>Foo</p><p>Bar</p><p>Baz</p></div>');
    });

    it.each([
        'area',
        'base',
        'br',
        'col',
        'commands',
        'embed',
        'hr',
        'img',
        'input',
        'keygen',
        'link',
        'meta',
        'param',
        'source',
        'track',
        'wbr',
    ])(`void element %s does not have a closing tag`, (tag: string) => {
        expect(`${jsx(tag, null)}`).toEqual(`<${tag}>`);
    });
});

describe('attributes', () => {
    it('renders a string attribute', () => {
        expect(`${(<p style={'color:blue'}>blue</p>)}`).toEqual('<p style="color:blue">blue</p>');
    });

    it('escapes attributes by default', () => {
        const alt = 'An attribute with &, <, >, /, " and \' in it.';
        expect(`${(<img alt={alt} src={'image.png'}/>)}`).toEqual(
            '<img alt="An attribute with &amp;, <, >, /, &quot; and \' in it." src="image.png">',
        );
    });

    it('a false boolean attribute is omitted', () => {
        expect(`${(<input required={false}/>)}`).toEqual('<input>');
    });

    it('a true boolean attribute is reduced to the key only', () => {
        expect(`${(<input required={true}/>)}`).toEqual('<input required>');
    });

    it('a boolean attribute can omit the value', () => {
        expect(`${(<input required/>)}`).toEqual('<input required>');
    });

    it('a numeric attribute is rendered as a string', () => {
        expect(`${(<hr data-x={99}/>)}`).toEqual(`<hr data-x="99">`);
    });

    it('a raw attribute is not escaped', () => {
        expect(`${(<hr data-x={raw('&')}/>)}`).toEqual(`<hr data-x="&">`);
    });

    it('a renderable attribute is respected', () => {
        class MyRenderable implements Renderable {
            render = () => 'Custom rendering';
        }

        expect(`${(<hr data-x={new MyRenderable()}/>)}`).toEqual('<hr data-x="Custom rendering">');
    });
});

describe('custom components', () => {
    it('renders a component', () => {
        function ImageInDiv({alt, src}: { alt: string; src: string }) {
            return (
                <div>
                    <img alt={alt} src={src}/>
                </div>
            );
        }

        expect(`${(<ImageInDiv alt={'image'} src={'path'}/>)}`).toEqual('<div><img alt="image" src="path"></div>');
    });

    it('renders a component with children', () => {
        function ButtonInDiv({className, children}: { className?: string, children: PhrasingContentCategory[] }) {
            return (
                <div>
                    <button class={className}>{children}</button>
                </div>
            );
        }

        expect(
            `${(
                <ButtonInDiv>
                    <p>Click</p>
                    <p>me</p>
                </ButtonInDiv>
            )}`,
        ).toEqual('<div><button><p>Click</p><p>me</p></button></div>');
    });
});

describe('fragments', () => {
    it('renders a fragment', () => {
        expect(
            `${(
                <>
                    <p>Foo</p>
                    <p>Bar</p>
                </>
            )}`,
        ).toEqual('<p>Foo</p><p>Bar</p>');
    });
});

describe('raw', () => {
    it('raw values can be debugged', () => {
        expect(raw('Some raw value').toString()).toEqual('Raw[Some raw value]');
    });
});


declare module '@triptease/html-jsx' {
    namespace JSX {
        interface IntrinsicElements {
            'some-web-component': {
                someAttribute: string;
                children?: Children;
            };
        }
    }
}
