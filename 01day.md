##### Welcome to

![](imgs/hermes.png)

### Lingua Lucis

by [patricio.io](http://patricio.io) | [@patriciogv](https://twitter.com/patriciogv)

---

![](imgs/flammarion.png)

Were we will learn to speak the language of digital light

---

![](imgs/journey.jpg)

Journey

---


What's a **shader?**

Note:
but... What's a shader?


---


3 Metaphors for shaders

Note:
Well, I have three methaphors...

---

![](imgs/cpu00.jpeg)

**CPU**

Note:
Imagine this is your CPU. It's preatty great to do all sort of things. Excecutes complex task one after the other one.
But what about a huge stream of very tiny tinsy small task... for example computing information to display in the screen.
It need to calculate every single pixels of it 

--

800x600 px = 
**480,000** <!-- {_class="fragment"} -->

at 60 mHz <!-- {_class="fragment"} -->
is **28,800,000** <!-- {_class="fragment"} -->

calculations per second <!-- {_class="fragment"} -->

--

2560x1600 px = 
**4,096,000** <!-- {_class="fragment"} -->

at 60 mHz <!-- {_class="fragment"} -->
is **245,760,000** <!-- {_class="fragment"} -->

calculations per second <!-- {_class="fragment"} -->

--

![](imgs/cpu03.jpeg)

sad **CPU**

Note:
So... this is obviusly inviable.
Closely 16 year ago graphic engeneers find a salution to this particular problem.
Using parallel procesors. Small procesors...

--

![](imgs/gpu.jpeg)

**GPU**

Note:
Little pipes very dummy. One next to each other... working independelty.
Like water in **strainer**... the stream of task pass through them.
To picture in this other way.
Each small tube... is very small procesador. that runs a C-like program

--

![](imgs/ArduinoUno.jpg)
Note:
Like an arduino

--

![](imgs/arduinos.png)
Note:
Well more like handreds of arduinos. 
Well you have to imagine better than that... that's only 72 of them.
Imagine that you can flash them all at once with the same firmware.

--

![](imgs/arduino.png)

Note:
Each one of them is connected to a single RGB Led and is responsable of computer the color that LED.

--

![](imgs/gpudiagram00.png)

<!-- .slide: data-transition="fade" -->
Note:
running in parallel.

--

![](imgs/gpudiagram01.png)

<!-- .slide: data-transition="fade" -->
Note:
Each one of them responsable for the color of a LED
Imagine the hability to flash them all with a same C program.

--

![](imgs/gpudiagram02.png)

<!-- .slide: data-transition="fade" -->
Note:
They also have their own memory that all share

--

<!-- .slide: data-transition="fade" -->

![](imgs/gpudiagram03.png)

Note:
Imagine this happening away from the CPU. In isolation.

We have just imagine the Graphic Computer unit, it's power and some of their limitations. 

---

![](imgs/manorchestra.png)

--

<iframe width="1280" height="720" src="https://www.youtube.com/embed/abnG3bzzCD0" frameborder="0" allowfullscreen></iframe>

---

![](imgs/gutenpress.png)

Note:
Shaders are for graphic developer, what the **Gutenberg Press** was for books authors.

--

![](imgs/print.png)

Note:
They free us from the **single threated hand of the CPU** with the **multiple parallel process** to do one frame per cycle.
Let's picture it like this...

---

![](imgs/bottlenek.png)

---

![](imgs/pipeline.jpg)

---

<a href="https://thebookofshaders.com">
<canvas class="sandbox" data-fragment-url="http://thebookofshaders.com/src/moon/moon.frag" data-textures="http://thebookofshaders.com/src/moon/moon.jpg" width="350px" height="350px"></canvas></a>

##### [The Book of Shaders](https://thebookofshaders.com) 

focus only on the fragment or pixel shaders

---


```glsl
uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    vec3 color = vec3(0.);
    color.rg = vec2(st.x,st.y);
    color.b = abs(sin(u_time));

    gl_FragColor = vec4(color,1.0);
}
```
code this into the [editor.**thebookofshaders**.com](https://thebookofshaders.com/edit.php)

--

<!-- .slide: data-background="#36383C" -->
<iframe class='fit' width='100%' height='800px' data-src='https://thebookofshaders.com/edit.php'></iframe>

Note:
This is a single shader. They are atomic and self contain. One **single main function*** execute in parallel for each pixel. Is the Sauron ring of GPUs. 
It have some build in functions like: ```gl_FragCoord``` (read only variable that  provides the position of the pixel on the viewport) and ```gl_FragColor``` (write only variable that contain the color of the pixel);
Then it have some variables that we can 'send' from the CPU that are going to be uniform to all the threats call ```uniforms```. There we are passing the resolution (or dimensions) of the viewport, the mouse position and elipse time. 

---

So far:

<br />

* **C Syntax**: `void main()`, `#define`, `float`, `int`, `for`, `if`, `else`, etc...
* **2D, 3D and 4D Vectors types**: [`vec2()`](https://thebookofshaders.com/glossary/?search=vec2), [`vec3()`](https://thebookofshaders.com/glossary/?search=vec3) and [`vec4()`](https://thebookofshaders.com/glossary/?search=vec4)
* **Special I/O Variables**: `gl_FragCoord` and `gl_FragColor`
* **Special types**: [`uniforms`](https://thebookofshaders.com/glossary/?search=uniforms)
* **Harware accelerated mathematical functions**: [`sin()`](https://thebookofshaders.com/glossary/?search=sin), [`cos()`](https://thebookofshaders.com/glossary/?search=cos), [`abs()`](https://thebookofshaders.com/glossary/?search=abs), much more!

---

<iframe class='fit' width='100%' height='800px' data-src='https://thebookofshaders.com/graph.html'></iframe>

---

![](imgs/logo-gray.png)

Patricio Gonzalez Vivo

[patricio.io](http://patricio.io) | [@patriciogv](https://twitter.com/patriciogv)
