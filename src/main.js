// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    width: '100%',
    height: '100%',
    padding: '0px',

    controls: true,
    progress: true,
    history: true,
    center: true,

    transition: 'slide',

    // Optional reveal.js plugins
    dependencies: [
        { src: 'src/reveal/lib/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'src/reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'src/reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'src/reveal/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'src/reveal/plugin/zoom-js/zoom.js', async: true },
        { src: 'src/reveal/plugin/notes/notes.js', async: true }
    ]
});

function newSection (event) {
    var section = event.currentSlide || event;

    window.glslCanvases = [];

    checkFit(section);
    checkSandbox(section);
}

function checkFit (section) {
    var big = section.getElementsByClassName('fit')[0];
    if (big) {
        var slide = document.getElementById('slides');
        slide.style.width = '100%';
        slide.style.height = '100%';
    }
}

function checkSandbox (section) {
    var list = section.getElementsByClassName('sandbox');
    if (list.length>0) {
        window.glslCanvases = [];
        for (var i = 0; i < list.length; i++){
            var sandbox = new GlslCanvas(list[i]);
            if (sandbox.isValid) {
                window.glslCanvases.push(sandbox);
            }
        }
    }
}

Reveal.addEventListener('slidechanged', newSection);
Reveal.addEventListener('ready', newSection);