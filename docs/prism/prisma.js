(function (Prism) {
    // https://github.dev/prisma/docs/blob/f2de3a8a06d56efc99b47487e8a606bc10bf6990/src/components/customMdx/prism/prism-prisma.js
    // Modify from above
	
    Prism.languages.prisma = Prism.languages.extend('clike', {
        keyword: /\b(?:datasource|enum|generator|model|type)\b/,
        'type-class-name': /(\b()\s+)[\w.\\]+/,
    })
      
    Prism.languages.javascript['class-name'][0].pattern = /(\b(?:model|datasource|enum|generator|type)\s+)[\w.\\]+/
      
    Prism.languages.insertBefore('prisma', 'function', {
        annotation: {
            pattern: /(^|[^.])@+\w+/,
            lookbehind: true,
            alias: 'punctuation',
        },
    })

    Prism.languages.insertBefore('prisma', 'function', {
        'ast-comment': {
            pattern: /(^|[^\\:])\/\/\/.*/,
            inside: {
                'nv-annotation': /@readOnly|@createOnly|@writeOnly|@mock|@seed|@scalar|@directive/,
                'nv-args': /\s.+$/

            },
            lookbehind: true,
            greedy: true
        },
    })
      
    Prism.languages.insertBefore('prisma', 'punctuation', {
        'type-args': /\b(?:references|fields|onDelete|onUpdate):/,
    })

    Prism.languages.prisma = {
        ...Prism.languages.prisma,
        'comment': {
            pattern: /(^|[^\\:])\/\/\s.*/,
            lookbehind: true,
            greedy: true
        },
    }
      
    Prism.languages.json5 = Prism.languages.js
}(Prism));
