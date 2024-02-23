# Wiki Readifyer

> *Makes Wikipedia articles pleasantly readable. Nothing more. Nothing less.*

Get it on the [Chrome Web Store](https://chrome.google.com/webstore/detail/wiki-readifyer/kinhfkialnlpoomgdpolokhholkofeke)!

## Contents

1. [Why use Wiki Readifyer?](#why-use-wiki-readifyer)
1. [Features](#features)
1. [Limitations](#limitations)
1. [Changelog](#changelog)
1. [License](#license)

## Why use Wiki Readifyer?

Have you ever tried to read an Wikipedia article, trying to gain knowledge but the page's design just hindered your eyes from locating the words that held the desired wisdom?
Well, worry no more! Wiki Readifyer makes the knowledge you are searching for pleasantly readable. The wisdom you desire to read is just one installation away!
And the best thing: It doesn't remove anything from the page it only changes the layout while staying 100% faithful* to the original contents.

*However, if the window width is too small the extension will hide the left sidebar, only to guarantee the best use of your precious screen space.
To make it visible again, just make the window wider.

## Features

The following changes are applied to guarantee the best possible experience:
- responsive layout: articles are pleasantly readable at any window size
- slight reduction of text-background-contrast
- reduction of article width
- moving the table of contents to the right where it stays even when scrolling
- the title also stays visible when scrolling down
- some other little adjustments

## Limitations

In 2023, many Wikipedias changed their default theme to [Vector 2022](https://en.wikipedia.org/wiki/Wikipedia:Vector_2022), a more modern and user-friendly theme.
Wiki Readifyer does not touch Wikipedia's layout if any theme other than the old Vector theme is active.
This means, to get the advertised layouts on Wikipedias with the new theme, you have to turn off the new skin using one of the methods described [here](https://en.wikipedia.org/wiki/Wikipedia:Vector_2022#How_to_turn_off_the_new_skin).

## Changelog

### 1.4.4

- Removed unnecessary host-permission
- Corrected z-indices on heading and table of contents to not interfer with edit-toolbar

### 1.4.3

- Added automatic detection of themes to avoid inteferance
- Fixed a bug where the extension's state was not shown on startup
- Refactorings

### 1.4.2

- Migrated to Manifest V3

## License

No license is provided.

Since this is a public repository, you may however view and fork the code according to GitHub's [Terms of Service](https://help.github.com/articles/github-terms-of-service).
Permission for usage that exceeds those terms is not granted.

> Copyright (c) 2023 David Maier
>
> All rights reserved.
>
> THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
