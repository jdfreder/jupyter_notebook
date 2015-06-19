# Jupyter Notebook Docs

## About

The Jupyter Notebook docs are made of two pieces, RST docs located in `source/` and .ipynb Notebook files located in `source/examples/Notebook`.  The notebook files are converting to RST during build.  The conversion output should be checked in, in addition to the original notebook files.  This allows the converted notebooks to be rendered on services like Read The Docs.

## Building

To build the docs, run `make html` from this directory.
