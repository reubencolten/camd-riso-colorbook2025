# CAMD RISO colorbook

### Install the CAMD RISO Inks Colorbook for Adobe Illustrator, InDesign, and Photoshop

1. Download the file [CAMD RISO Inks.acb](CAMD RISO Inks.acb)
2. Drag the file to **Adobe [Illustrator/InDesign/Photoshop] XXXX/Presets/en_US/Swatches/Color Books**. You will be asked to enter your password. 
3. Open Adobe Illustrator and choose **Window/Swatch Libraries/Color Books/CAMD RISO Inks**.

---

### How to generate a custom colorbook

These are instructions on how to generate an Adobe colorbook (.acb) file containing specific RISO inks used on the CAMD Risograph. This should only be done if new inks are added to the print lab.

#### Setup

1. Install [Node.js](https://nodejs.org/en).
2. Install [https://github.com/atesgoral/acb](https://github.com/atesgoral/acb) using the terminal command `npm install @atesgoral/acb`.

#### Edit the colors array

Edit the array of colors in `acb_encoder.mjs`.

For colors to appear as spot colors, the color specifications must use the Lab color model. You can convert CMYK colors to Lab using Adobe Photoshop.

For reference color specifications, see [https://www.stencil.wiki/colors
](https://www.stencil.wiki/colors).

#### Generate the .acb file

1. Clone this repository.
2. Open a terminal at the repository folder.
3. Run `node acb_encoder.mjs > "CAMD RISO Inks.acb"`


---

### How to read .acb files

1. Clone this repository.
2. Open a terminal at the repository folder.
3. Run `node acb_decoder.mjs < PATH_TO_ACB_FILE > OUTPUT_FILE.json`

---

This is all thanks to [Ateş Göral](https://github.com/atesgoral) and the folks at [Stencil](https://www.stencil.wiki/).








