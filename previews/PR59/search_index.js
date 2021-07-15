var documenterSearchIndex = {"docs":
[{"location":"profiles/#Working-with-microbial-abundances-1","page":"Profiles and Communities","title":"Working with microbial abundances","text":"","category":"section"},{"location":"profiles/#","page":"Profiles and Communities","title":"Profiles and Communities","text":"CommunityProfile\nsamples\nfeatures\nsamplenames\nfeaturenames\nrelativeabundance\nrelativeabundance!\npresent\nprevalence","category":"page"},{"location":"profiles/#Microbiome.CommunityProfile","page":"Profiles and Communities","title":"Microbiome.CommunityProfile","text":"CommunityProfile{T, F, S} <: AbstractAbundanceTable{T, F, S}\n\nAn AbstractAssemblage from EcoBase.jl that uses an AxisArray of a SparseMatrixCSC under the hood.\n\nCommunityProfiles are tables with AbstractFeature-indexed rows and AbstractSample-indexed columns. Note - we can use the name of samples and features to index.\n\njulia> txs = [Taxon(\"taxon$i\") for i in 1:10];\n\njulia> mss = [MicrobiomeSample(\"sample$i\") for i in 1:5];\n\njulia> mat = spzeros(10,5);\n\njulia> for i in 1:5; mat[i,i] = 1.; end\n\njulia> comm = CommunityProfile(mat, txs, mss)\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 10 things in 5 places\n\nThing names:\ntaxon1, taxon2, taxon3...taxon9, taxon10\n\nPlace names:\nsample1, sample2, sample3, sample4, sample5\n\njulia> comm[\"taxon1\", \"sample1\"]\n1.0\n\njulia> comm[:,[\"sample1\", \"sample5\"]]\nCommunityProfile{Float64, Taxon, MicrobiomeSample} with 10 things in 2 places\n\nThing names:\ntaxon1, taxon2, taxon3...taxon9, taxon10\n\nPlace names:\nsample1, sample5\n\njulia> comm[Taxon(\"taxon3\", :kingdom), \"sample1\"]\n0.0\n\n\n\n\n\n","category":"type"},{"location":"profiles/#Microbiome.samples","page":"Profiles and Communities","title":"Microbiome.samples","text":"samples(at::AbstractAbundanceTable)\n\nReturns samples in at. To get samplenames instead, use samplenames.\n\n\n\n\n\n","category":"function"},{"location":"profiles/#Microbiome.features","page":"Profiles and Communities","title":"Microbiome.features","text":"features(at::AbstractAbundanceTable)\n\nReturns features in at. To get featurenames instead, use featurenames.\n\n\n\n\n\n","category":"function"},{"location":"profiles/#Microbiome.samplenames","page":"Profiles and Communities","title":"Microbiome.samplenames","text":"samplenames(at::AbstractAbundanceTable)\n\nGet a vector of sample names from at, equivalent to name.(samples(at))\n\n\n\n\n\n","category":"function"},{"location":"profiles/#Microbiome.featurenames","page":"Profiles and Communities","title":"Microbiome.featurenames","text":"featurenames(at::AbstractAbundanceTable)\n\nGet a vector of feature names from at, equivalent to name.(features(at))\n\n\n\n\n\n","category":"function"},{"location":"profiles/#Microbiome.relativeabundance","page":"Profiles and Communities","title":"Microbiome.relativeabundance","text":"relativeabundance(at::AbstractAbundanceTable, kind::Symbol=:fraction)\n\nLike relativeabundance!, but does not mutate original.\n\n\n\n\n\n","category":"function"},{"location":"profiles/#Microbiome.relativeabundance!","page":"Profiles and Communities","title":"Microbiome.relativeabundance!","text":"relativeabundance!(a::AbstractAbundanceTable; kind::Symbol=:fraction)\n\nNormalize each sample in AbstractAbundanceTable to the sum of the sample.\n\nBy default, columns sum to 1.0. Use kind=:percent for columns to sum to 100.\n\n\n\n\n\n","category":"function"},{"location":"profiles/#Microbiome.present","page":"Profiles and Communities","title":"Microbiome.present","text":"present(t::Union{Real, Missing}, minabundance::Real=0.0)\npresent(at::AbstractAbundanceTable, minabundance::Real=0.0)\n\nCheck if a given (non-zero) value is greater than or equal to a minimum value. If the minimum abundance is 0, just checks if value is non-zero.\n\nIf used on an AbstractAbundanceTable, returns a sparse boolean matrix of the same size.\n\n\n\n\n\n","category":"function"},{"location":"profiles/#Microbiome.prevalence","page":"Profiles and Communities","title":"Microbiome.prevalence","text":"prevalence(a::AbstractArray{<:Real}, minabundance::Real=0.0)\nprevalence(at::AbstractAbundanceTable, minabundance::Real=0.0)\n\nReturn the fraction of values that are greater than or equal to a minimum. If the minimum abundance is 0, returns the fraction of non-zero values.\n\nIf used on an AbstractAbundanceTable, returns a prevalence value for each feature accross the samples.\n\n\n\n\n\n","category":"function"},{"location":"license/#","page":"-","title":"-","text":"MIT License","category":"page"},{"location":"license/#","page":"-","title":"-","text":"Copyright (c) 2017 BioJulia","category":"page"},{"location":"license/#","page":"-","title":"-","text":"Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:","category":"page"},{"location":"license/#","page":"-","title":"-","text":"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.","category":"page"},{"location":"license/#","page":"-","title":"-","text":"THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","category":"page"},{"location":"diversity/#Diversity-measures-on-communities-and-samples-1","page":"Diversity measures","title":"Diversity measures on communities and samples","text":"","category":"section"},{"location":"diversity/#Alpha-Diversity-1","page":"Diversity measures","title":"Alpha Diversity","text":"","category":"section"},{"location":"diversity/#","page":"Diversity measures","title":"Diversity measures","text":"shannon\nshannon!\nginisimpson\nginisimpson!","category":"page"},{"location":"diversity/#Microbiome.shannon","page":"Diversity measures","title":"Microbiome.shannon","text":"shannon(v::Union{AbstractVector, AbstractSparseMatrix}) \nshannon(abt::AbstractAbundanceTable)\n\nComputes the Shannon alpha diversity metric for a vector. When called on an AbstractAbundanceTable, returns a 1 x nsamples matrix with 1 entry per sample. See also shannon!.\n\n\n\n\n\n","category":"function"},{"location":"diversity/#Microbiome.shannon!","page":"Diversity measures","title":"Microbiome.shannon!","text":"shannon!(abt::AbstractAbundanceTable; overwrite=false)\n\nAdds a :shannon entry to the metadata for each sample in abt with the Shannon alpha diversity of that sample (see shannon). If overwrite=false (the default), uses insert! to perform this operation, so an error will be thrown if any sample already contains a :shannon entry. Otherwise, uses set!.\n\n\n\n\n\n","category":"function"},{"location":"diversity/#Microbiome.ginisimpson","page":"Diversity measures","title":"Microbiome.ginisimpson","text":"ginisimpson(v::Union{AbstractVector, AbstractSparseMatrix}) \nginisimpson(abt::AbstractAbundanceTable, overwrite=false)\n\nComputes the Gini-Simpson alpha diversity metric for a vector. When called on an AbstractAbundanceTable, returns a 1 x nsamples matrix with 1 entry per sample. See also ginisimpson!.\n\n\n\n\n\n","category":"function"},{"location":"diversity/#Microbiome.ginisimpson!","page":"Diversity measures","title":"Microbiome.ginisimpson!","text":"ginisimpson!(abt::AbstractAbundanceTable; overwrite=false)\n\nAdds a :ginisimpson entry to the metadata for each sample in abt with the Gini-Simpson alpha diversity of that sample (see ginisimpson). If overwrite=false (the default), uses insert! to perform this operation, so an error will be thrown if any sample already contains a :ginisimpson entry. Otherwise, uses set!.\n\n\n\n\n\n","category":"function"},{"location":"diversity/#Beta-Diversity-1","page":"Diversity measures","title":"Beta Diversity","text":"","category":"section"},{"location":"diversity/#","page":"Diversity measures","title":"Diversity measures","text":"Quite often, it's useful to boil stuff down to distances between samples. AbstractAbundanceTables take advantage of the pairwise function from Distances.jl to get a symetric distance matrix.","category":"page"},{"location":"diversity/#","page":"Diversity measures","title":"Diversity measures","text":"Right now, only Bray-Curtis, Jaccard, and Hellinger are implemented,  but it would be straightforward to add any others. Open an issue if you want them!","category":"page"},{"location":"diversity/#","page":"Diversity measures","title":"Diversity measures","text":"You can also get fit a principal coordinates analysis (PCoA) to your AbstractAbundanceTable using the fit(MDS, ...) from MultivariateStats.jl under the hood.","category":"page"},{"location":"diversity/#","page":"Diversity measures","title":"Diversity measures","text":"braycurtis\njaccard\nhellinger\npcoa","category":"page"},{"location":"diversity/#Microbiome.braycurtis","page":"Diversity measures","title":"Microbiome.braycurtis","text":"braycurtis(abt::AbstractAbundanceTable)\n\nReturns a pairwise Bray-Curtis dissimilarity matrix.\n\n\n\n\n\n","category":"function"},{"location":"diversity/#Microbiome.jaccard","page":"Diversity measures","title":"Microbiome.jaccard","text":"jaccard(abt::AbstractAbundanceTable)\n\nReturns a pairwise Jaccard distance matrix.\n\n\n\n\n\n","category":"function"},{"location":"diversity/#Microbiome.hellinger","page":"Diversity measures","title":"Microbiome.hellinger","text":"hellinger(abt::AbstractAbundanceTable)\n\nReturns a pairwise Hellinger distance matrix.\n\n\n\n\n\n","category":"function"},{"location":"diversity/#Microbiome.pcoa","page":"Diversity measures","title":"Microbiome.pcoa","text":"pcoa(abt::AbstractAbundanceTable, f=braycurtis)\n\nReturns eigenvectors from fitting MDS to a distance metric generated by f, by default braycurtis.\n\n\n\n\n\n","category":"function"},{"location":"contributing/#Contributing-1","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"contributing/#","page":"Contributing","title":"Contributing","text":"The BioJulia organisation has a set of contribution guidelines which apply to all BioJulia projects. These guidelines are available here and it is recommended all new contributors read these guidelines before opening a pull request.","category":"page"},{"location":"contributing/#Making-a-contribution-1","page":"Contributing","title":"Making a contribution","text":"","category":"section"},{"location":"contributing/#","page":"Contributing","title":"Contributing","text":"If you're interested in adding functionality to Microbiome.jl, please feel free to open an issue or a pull request (PR) against the master branch. If you're not yet ready for that, you can also ask questions/start a discussion in the #biology channel on slack, or #ecology stream on zulip. ","category":"page"},{"location":"contributing/#","page":"Contributing","title":"Contributing","text":"Work-in-progress PRs are fine, as discussion about approach and code review can happen in the PR.","category":"page"},{"location":"contributing/#","page":"Contributing","title":"Contributing","text":"Before merging, any new code should be unit tested and have docs for newly exported functions, but if you don't know how to do this, don't worry, we can help!","category":"page"},{"location":"samples_features/#Samples-and-Features-1","page":"Samples and features","title":"Samples and Features","text":"","category":"section"},{"location":"samples_features/#","page":"Samples and features","title":"Samples and features","text":"Microbial profiles are made up of AbstractSamples and AbstractFeatures. Typically, an AbstractSample is an individual biospecimen or other observation, and contains some number of AbstractFeatures, such as taxa or gene functions. AbstractSamples may also contain arbitrary metadata.","category":"page"},{"location":"samples_features/#Sample-types-1","page":"Samples and features","title":"Sample types","text":"","category":"section"},{"location":"samples_features/#","page":"Samples and features","title":"Samples and features","text":"At its most basic, an AbstractSample simply encodes a name (which should be a unique identifier), and a place to hold metadata. The concrete type MicrobiomeSample is implemented with these two fields, the latter of which is a Dictionary from Dictionaries.jl.","category":"page"},{"location":"samples_features/#","page":"Samples and features","title":"Samples and features","text":"MicrobiomeSample","category":"page"},{"location":"samples_features/#Microbiome.MicrobiomeSample","page":"Samples and features","title":"Microbiome.MicrobiomeSample","text":"MicrobiomeSample(name::String, metadata::Dictionary{Symbol, T}) <: AbstractSample\nMicrobiomeSample(name::String)\n\nMicrobiome sample type that includes a name and a Dictionary of arbitrary metadata using Symbols (other than :name or :metadata) as keys.\n\nMetadata can be accessed using getproperty or getindex on the sample itself.\n\njulia> ms = MicrobiomeSample(\"sample1\", Dictionary([:gender, :age], [\"female\", 180]))\nMicrobiomeSample(\"sample1\", {:gender │ \"female\", :age │ 180})\n\njulia> name(ms)\n\"sample1\"\n\njulia> ms.name\n\"sample1\"\n\njulia> ms.gender\n\"female\"\n\njulia> ms.age\n180\n\nSamples can be instantiated with only a name, leaving the metadata Dictionary blank\n\njulia> ms2 = MicrobiomeSample(\"sample2\")\nMicrobiomeSample(\"sample2\", {})\n\nAdding or changing metadata follows the same rules as for the normal Dictionary type.\n\nto change a value use setproperty or setindex. Note that this will fail if the key does not already exist.\nto add or remove a value with validation that it does or does not exist already, use insert! and delete! respectively.\nto add or remove a value without validation (\"upsert\"), use set! and unset! respectively.\n\njulia> ms\nMicrobiomeSample(\"sample1\", {:gender │ \"female\", :age │ 180})\n\njulia> ms.age = 16 * 365 # or `ms[:age] = 16 * 365`\n5840\n\njulia> set!(ms, :gender, \"nonbinary\")\nMicrobiomeSample(\"sample1\", {:gender │ \"nonbinary\", :age │ 5840})\n\njulia> insert!(ms, :occupation, \"clerk\")\nMicrobiomeSample(\"sample1\", {:gender │ \"nonbinary\", :age │ 5840, :occupation │ \"clerk\"})\n\njulia> insert!(ms, :occupation, \"bagger\")\nERROR: IndexError(\"Dictionary already contains index: occupation\")\n\njulia> delete!(ms, :occupation)\nMicrobiomeSample(\"sample1\", {:gender │ \"nonbinary\", :age │ 5840})\n\njulia> delete!(ms, :occupation)\nERROR: IndexError(\"Index doesn't exist: occupation\")\n\njulia> unset!(ms, :occupation)\nMicrobiomeSample(\"sample1\", {:gender │ \"nonbinary\", :age │ 5840})\n\n\n\n\n\n","category":"type"},{"location":"samples_features/#Feature-Types-1","page":"Samples and features","title":"Feature Types","text":"","category":"section"},{"location":"samples_features/#","page":"Samples and features","title":"Samples and features","text":"AbstractFeature types also have a name, but other fields are optional. Microbiome.jl defines two concrete AbstractFeature types, Taxon and GeneFunction.","category":"page"},{"location":"samples_features/#","page":"Samples and features","title":"Samples and features","text":"Taxon\nGeneFunction","category":"page"},{"location":"samples_features/#Microbiome.Taxon","page":"Samples and features","title":"Microbiome.Taxon","text":"Taxon(name::String, clade::Union{Missing, Symbol, Int}) <: AbstractFeature\nTaxon(name::String)\n\nMicrobial taxon with a name and a clade that can be one of \n\n:domain\n:kingom\n:phylum\n:class\n:order\n:faamily\n:genus\n:species\n:subspecies\n:strain\n\nor missing. Contructors can also use numbers 0-9, or pass a string alone (in which case the taxon will be stored as missing)\n\n\n\n\n\n","category":"type"},{"location":"samples_features/#Microbiome.GeneFunction","page":"Samples and features","title":"Microbiome.GeneFunction","text":"GeneFunction(name::String, taxon::Union{Taxon, String, Missing}) <: AbstractFeature\nGeneFunction(name::String)\n\nMicrobial gene function object with optional stratification (taxon).\n\n\n\n\n\n","category":"type"},{"location":"samples_features/#Types-and-Methods-1","page":"Samples and features","title":"Types and Methods","text":"","category":"section"},{"location":"samples_features/#","page":"Samples and features","title":"Samples and features","text":"metadata\nname\nclade\nhasclade\ntaxon\nhastaxon","category":"page"},{"location":"samples_features/#Microbiome.metadata","page":"Samples and features","title":"Microbiome.metadata","text":"metadata(t::AbstractSample)\n\nGet the metadata field from an AbstractSample. Note that this is not a copy, so modifications to the returned value will update the parent AbstractSample as well.\n\n\n\n\n\n","category":"function"},{"location":"samples_features/#Microbiome.name","page":"Samples and features","title":"Microbiome.name","text":"name(t::Union{AbstractSample, AbstractFeature})\n\nGet the name field from an AbstractSample or AbstractFeature.\n\n\n\n\n\n","category":"function"},{"location":"samples_features/#Microbiome.clade","page":"Samples and features","title":"Microbiome.clade","text":"clade(t::Union{Taxon, missing})\n\nGet the clade field from an Taxon. Returns missing if the clade is not set.\n\n\n\n\n\n","category":"function"},{"location":"samples_features/#Microbiome.hasclade","page":"Samples and features","title":"Microbiome.hasclade","text":"hasclade(t::Taxon)::Bool\n\nPretty self-explanatory.\n\n\n\n\n\n","category":"function"},{"location":"samples_features/#Microbiome.taxon","page":"Samples and features","title":"Microbiome.taxon","text":"taxon(t::Union{GeneFunction, missing})\n\nGet the taxon field from a GeneFunction. Returns missing if the taxon is not set.\n\n\n\n\n\n","category":"function"},{"location":"samples_features/#Microbiome.hastaxon","page":"Samples and features","title":"Microbiome.hastaxon","text":"hastaxon(t::GeneFunction)::Bool\n\nPretty self-explanatory.\n\n\n\n\n\n","category":"function"},{"location":"#Microbiome.jl-1","page":"Home","title":"Microbiome.jl","text":"","category":"section"},{"location":"#Description-1","page":"Home","title":"Description","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Microbiome.jl is a package for manipulating and analyzing microbiome and microbial community data.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Install Microbiome from the Julia REPL:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> using Pkg\n\njulia> pkg\"add Microbiome\"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"If you are interested in the cutting edge of the development, please check out the master branch to try new features before release.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> pkg\"add Microbiome#master\"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pages=[\"samples_features.md\", \"profiles.md\", \"diversity.md\"]\nDepth=2","category":"page"}]
}
