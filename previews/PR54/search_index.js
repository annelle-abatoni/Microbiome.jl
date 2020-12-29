var documenterSearchIndex = {"docs":
[{"location":"license/#","page":"-","title":"-","text":"MIT License","category":"page"},{"location":"license/#","page":"-","title":"-","text":"Copyright (c) 2017 BioJulia","category":"page"},{"location":"license/#","page":"-","title":"-","text":"Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:","category":"page"},{"location":"license/#","page":"-","title":"-","text":"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.","category":"page"},{"location":"license/#","page":"-","title":"-","text":"THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","category":"page"},{"location":"abundances/#Working-with-microbial-abundances-1","page":"Microbial Abundances","title":"Working with microbial abundances","text":"","category":"section"},{"location":"abundances/#","page":"Microbial Abundances","title":"Microbial Abundances","text":"Tables of abundances are based off ComMatrix types from SpatialEcology.jl, where columns are samples and rows are features (eg species). Sample and feature names are also stored, and there's a convenience function if you want to convert a DataFrame to a ComMatrix, assuming the first column contains feature names:","category":"page"},{"location":"abundances/#","page":"Microbial Abundances","title":"Microbial Abundances","text":"using Microbiome, DataFrames;\n\ndf = DataFrame(species=[\"E. coli\", \"B. fragilis\", \"L. casei\"],\n                      sample1=[1, 4, 5],\n                      sample2=[3, 8, 0],\n                      sample3=[0, 3, 4]);\n\nabund = abundancetable(df)","category":"page"},{"location":"abundances/#","page":"Microbial Abundances","title":"Microbial Abundances","text":"Forgive the clutter... ComMatricies name rows as species (which is true in this case, but need not be), and columns are \"sites\" rather than samples. That will be fixed eventually.","category":"page"},{"location":"abundances/#","page":"Microbial Abundances","title":"Microbial Abundances","text":"samplenames(abund)\nfeaturenames(abund)\nsampletotals(abund) # this is column sums\nfeaturetotals(abund) # this is row sums","category":"page"},{"location":"abundances/#","page":"Microbial Abundances","title":"Microbial Abundances","text":"If you want relative abundance, you can do relativeabundance(abund) or relativeabundance!(abund):","category":"page"},{"location":"abundances/#","page":"Microbial Abundances","title":"Microbial Abundances","text":"relativeabundance!(abund);\n\nsampletotals(abund)","category":"page"},{"location":"abundances/#","page":"Microbial Abundances","title":"Microbial Abundances","text":"You can also filter on the n most abundant features accross the dataset. This function automatically generates an n+1 row for other containing the remaining features. Note - these doesn't modify in-place, so you've gotta reassign if you want to update:","category":"page"},{"location":"abundances/#","page":"Microbial Abundances","title":"Microbial Abundances","text":"abund2 = filterabund(abund, 1);\n\nfeaturenames(abund2)","category":"page"},{"location":"abundances/#Methods-1","page":"Microbial Abundances","title":"Methods","text":"","category":"section"},{"location":"abundances/#","page":"Microbial Abundances","title":"Microbial Abundances","text":"Modules = [Microbiome]\nPages = [\"abundances.jl\"]","category":"page"},{"location":"abundances/#Microbiome.present","page":"Microbial Abundances","title":"Microbiome.present","text":"present(t::Union{Real, Missing}, minabundance::Real=0.0)\npresent(at::AbstractAbundanceTable, minabundance::Real=0.0)\n\nCheck if a given (non-zero) value is greater than or equal to a minimum value. If the minimum abundance is 0, just checks if value is non-zero.\n\nIf used on an AbstractAbundanceTable, returns a sparse boolean matrix of the same size.\n\n\n\n\n\n","category":"function"},{"location":"abundances/#Microbiome.prevalence","page":"Microbial Abundances","title":"Microbiome.prevalence","text":"prevalence(a::AbstractArray{<:Real}, minabundance::Real=0.0)\nprevalence(at::AbstractAbundanceTable, minabundance::Real=0.0)\n\nReturn the fraction of values that are greater than or equal to a minimum. If the minimum abundance is 0, returns the fraction of non-zero values.\n\nIf used on an AbstractAbundanceTable, returns a prevalence value for each feature accross the samples.\n\n\n\n\n\n","category":"function"},{"location":"abundances/#Microbiome.relativeabundance!-Tuple{Microbiome.AbstractAbundanceTable}","page":"Microbial Abundances","title":"Microbiome.relativeabundance!","text":"relativeabundance!(a::AbstractAbundanceTable; kind::Symbol=:fraction)\n\nNormalize each sample in AbstractAbundanceTable to the sum of the sample.\n\nBy default, columns sum to 1.0. Use kind=:percent for columns to sum to 100.\n\n\n\n\n\n","category":"method"},{"location":"abundances/#Microbiome.relativeabundance-Union{Tuple{T}, Tuple{T,Symbol}} where T<:Microbiome.AbstractAbundanceTable","page":"Microbial Abundances","title":"Microbiome.relativeabundance","text":"relativeabundance(at::AbstractAbundanceTable, kind::Symbol=:fraction)\n\nLike relativeabundance!, but does not mutate original.\n\n\n\n\n\n","category":"method"},{"location":"contributing/#Contributing-1","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"contributing/#","page":"Contributing","title":"Contributing","text":"The BioJulia organisation has a set of contribution guidelines which apply to all BioJulia projects. These guidelines are available here and it is recommended all new contributors read these guidelines before opening a pull request.","category":"page"},{"location":"contributing/#Making-a-contribution-1","page":"Contributing","title":"Making a contribution","text":"","category":"section"},{"location":"contributing/#","page":"Contributing","title":"Contributing","text":"If you're interested in adding functionality to Microbiome.jl, please feel free to open an issue or a pull request (PR) against the master branch. If you're not yet ready for that, you can also ask questions/start a discussion in the Bio.jl gitter channel. ","category":"page"},{"location":"contributing/#","page":"Contributing","title":"Contributing","text":"Work-in-progress PRs are fine, as discussion about approach and code review can happen in the PR.","category":"page"},{"location":"contributing/#","page":"Contributing","title":"Contributing","text":"Before merging, any new code should be unit tested and have docs for newly exported functions, but if you don't know how to do this, don't worry, we can help!","category":"page"},{"location":"distances/#Working-with-Distances-/-Dissimilarity-1","page":"Distances & Dissimilarity","title":"Working with Distances / Dissimilarity","text":"","category":"section"},{"location":"distances/#","page":"Distances & Dissimilarity","title":"Distances & Dissimilarity","text":"Quite often, it's useful to boil stuff down to distances between samples. AbundanceTables can be used with the pairwise() function from Distances.jl to get a symetric distance matrix.","category":"page"},{"location":"distances/#","page":"Distances & Dissimilarity","title":"Distances & Dissimilarity","text":"At the moment, this only works if you're on SpatialEcology.jl's master branch.","category":"page"},{"location":"distances/#","page":"Distances & Dissimilarity","title":"Distances & Dissimilarity","text":"using Distances\nusing Microbiome\n\nabund = abundancetable([1  3  0;\n                        4  8  3;\n                        5  0  4]);\n\ndm = pairwise(BrayCurtis(), abund, dims=2)","category":"page"},{"location":"distances/#Methods-1","page":"Distances & Dissimilarity","title":"Methods","text":"","category":"section"},{"location":"distances/#","page":"Distances & Dissimilarity","title":"Distances & Dissimilarity","text":"Modules = [Microbiome]\nPages = [\"distances.jl\"]","category":"page"},{"location":"distances/#Microbiome.braycurtis-Tuple{Microbiome.AbstractAbundanceTable}","page":"Distances & Dissimilarity","title":"Microbiome.braycurtis","text":"braycurtis(abt::AbstractAbundanceTable)\n\nRetruns a pairwise Bray-Curtis dissimilarity matrix. \n\n\n\n\n\n","category":"method"},{"location":"distances/#Microbiome.ginisimpson!-Tuple{Microbiome.AbstractAbundanceTable}","page":"Distances & Dissimilarity","title":"Microbiome.ginisimpson!","text":"ginisimpson!(abt::AbstractAbundanceTable; overwrite=false)\n\nAdds a :ginisimpson entry to the metadata for each sample in abt with the Gini-Simpson alpha diversity of that sample (see ginisimpson). If overwrite=false (the default), uses insert! to perform this operation, so an error will be thrown if any sample already contains a :ginisimpson entry. Otherwise, uses set!.\n\n\n\n\n\n","category":"method"},{"location":"distances/#Microbiome.ginisimpson-Union{Tuple{Union{AbstractArray{T,1}, SparseArrays.AbstractSparseArray{T,Ti,2} where Ti}}, Tuple{T}} where T<:Real","page":"Distances & Dissimilarity","title":"Microbiome.ginisimpson","text":"ginisimpson(v::Union{AbstractVector, AbstractSparseMatrix}) \nginisimpson(abt::AbstractAbundanceTable, overwrite=false)\n\nComputes the Gini-Simpson alpha diversity metric for a vector. When called on an AbstractAbundanceTable, returns a 1 x nsamples matrix with 1 entry per sample. See also ginisimpson!.\n\n\n\n\n\n","category":"method"},{"location":"distances/#Microbiome.shannon!-Tuple{Microbiome.AbstractAbundanceTable}","page":"Distances & Dissimilarity","title":"Microbiome.shannon!","text":"shannon!(abt::AbstractAbundanceTable; overwrite=false)\n\nAdds a :shannon entry to the metadata for each sample in abt with the Shannon alpha diversity of that sample (see shannon). If overwrite=false (the default), uses insert! to perform this operation, so an error will be thrown if any sample already contains a :shannon entry. Otherwise, uses set!.\n\n\n\n\n\n","category":"method"},{"location":"distances/#Microbiome.shannon-Union{Tuple{Union{AbstractArray{T,1}, SparseArrays.AbstractSparseArray{T,Ti,2} where Ti}}, Tuple{T}} where T<:Real","page":"Distances & Dissimilarity","title":"Microbiome.shannon","text":"shannon(v::Union{AbstractVector, AbstractSparseMatrix}) \nshannon(abt::AbstractAbundanceTable)\n\nComputes the Shannon alpha diversity metric for a vector. When called on an AbstractAbundanceTable, returns a 1 x nsamples matrix with 1 entry per sample. See also shannon!.\n\n\n\n\n\n","category":"method"},{"location":"#Microbiome.jl-1","page":"Home","title":"Microbiome.jl","text":"","category":"section"},{"location":"#For-analysis-of-microbiome-and-microbial-community-data-1","page":"Home","title":"For analysis of microbiome and microbial community data","text":"","category":"section"},{"location":"#Description-1","page":"Home","title":"Description","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Microbiome.jl is a package for manipulating and analyzing microbiome and microbial community data. Many functions have been added to external packages and are imported here.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Install Microbiome from the Julia REPL:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> using Pkg\n\njulia> pkg\"registry add https://github.com/BioJulia/BioJuliaRegistry.git\" # note: this only needs to be done once\n\njulia> pkg\"add Microbiome\"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"If you are interested in the cutting edge of the development, please check out the master branch to try new features before release.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> pkg\"add Microbiome#master\"","category":"page"}]
}
