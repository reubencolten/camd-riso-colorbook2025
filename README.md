# CAMD RISO ink colorbook - October 2025

## Overview
Adds additional colors (Charcoal, Sea Foam, and Light Muave) to [tlinkner's](https://github.com/tlinkner "Todd Linkner's GitHub") [camd-riso-colorbook](https://github.com/tlinkner/camd-riso-colorbook "Repository link").

Uses https://github.com/atesgoral/acb

## Adding the colorbook to Photoshop
1. Download `CAMD RISO Inks 2025.acb`
2. Copy the file to the **Color Books** directory within Photoshop's installation directory. On macOS, this can be found in **/Applications/Adobe Photoshop/Presets/Color Books**

You can use the `CAMD-riso-swatches.aco` file to import the colors as swatches.

## Generate a new Adobe colorbook (.acb) file
If you need to update or change the color book to reflect different ink colors:

### 1: Setup:
1. Ensure you have Node.js installed
2. Clone this repository
3. Open a new terminal in the repository directory and run `npm install`

### 2: Edit the colors
Edit the array of colors defined in `acb_encoder.ts`

From [camd-riso-colorbook](https://github.com/tlinkner/camd-riso-colorbook):

> For colors to appear as spot colors, the color specifications must use the Lab color model. You can convert CMYK colors to Lab using Adobe Photoshop.
>
> For reference color specifications, see https://www.stencil.wiki/colors.

In the Photoshop color picker you can put the hex value of the Riso ink color from https://stencil.wiki/wiki/Category:Riso_inks and it will display the RGB, CMYK, and Lab values.

**See [Ateş Göral's README](https://github.com/atesgoral/acb/blob/b84b2a6700c8409bd0a5e68c7ab2c3bbb7fec369/README.md) for ColorBook and Color property descriptions.**

- If you want to change how the colorbook displays the colors in the Color Libraries window, you can adjust the order of the Colors array and the pageSize and pageKey values.

### 3: Generate the .acb file
Open a terminal at the repository folder and run `node acb_encoder.ts > "FileName.acb"`

- replace "FileName" with the what you want your file to be called.

## File Descriptions
`CAMD RISO Inks 2025.acb`: The Adobe colorbook file of Riso Ink colors in the CAMD print center as of October 2025

`CAMD-riso-swatches.aco`: The Adobe color swatch file of the same colors. I made this file by manually adding each color from the color book to swatches then exporting them from photoshop.

`acb_decoder.ts`: The file for decoding an .acb file into a JSON. This code is copied from the decoding examples in [Ateş Göral's README](https://github.com/atesgoral/acb/blob/b84b2a6700c8409bd0a5e68c7ab2c3bbb7fec369/README.md).

`acb_encoder.ts`: The file for encoding a new .acb file containing color values that correspond to Riso Ink colors. 

- This is a reformatted version of [tlinkner's acb_encoder.mjs](https://github.com/tlinkner/camd-riso-colorbook/blob/5c8a09c8fed195de24f597102adf289c2a3a5dfc/acb_encoder.mjs) with Charcoal, Sea Foam, and Light Muave added.

- I also reordered the colors and reformatted the number of colors per page.

- Because Ateş Göral's README indicated that the code value for a color could be any unique 6 character string, I opted to make the code for each color that color's hex code. Seemingly this has no affect on anything (in their README examples, the code values are random strings e.g. 'RED' with three spaces after).