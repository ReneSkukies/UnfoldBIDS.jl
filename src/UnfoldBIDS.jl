module UnfoldBIDS

# basics
using StatsModels, MixedModels, DataFrames, Statistics, Printf
# file loading
#using PyMNE, CSVFiles, DelimitedFiles, Glob
using PyMNE
# unfold
using Unfold


# Loading
include("load.jl")
# Various utils
include("utils.jl")

# Export list
export BidsLayout
#export BIDSpath, loadRaw
#export populateRaw
#export addDefaultEventformulas!
#export epochedFit

import StatsModels.FormulaTerm # for exporting
export FormulaTerm

end
