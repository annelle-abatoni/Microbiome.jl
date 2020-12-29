## Diversity Measures

"""
    shannon(v::Union{AbstractVector, AbstractSparseMatrix}) 
    shannon(abt::AbstractAbundanceTable) 

Computes the Shannon alpha diversity metric for a vector.
When called on an `AbstractAbundanceTable`,
returns a 1 x nsamples matrix with 1 entry per sample.
See also [`shannon!`](@ref).
"""
function shannon(v::Union{AbstractVector{T}, AbstractSparseMatrix{T}}) where T<:Real
    total = sum(v)
    relab = map(x-> x/total, v)
    return -sum([log(x^x) for x in relab])
end

function shannon(abt::AbstractAbundanceTable)
    return hcat((shannon(abundances(abt[:, s])) for s in samplenames(abt))...)
end

"""
    shannon!(abt::AbstractAbundanceTable; overwrite=false)

Adds a `:shannon` entry to the metadata for each sample in `abt`
with the Shannon alpha diversity of that sample (see [`shannon`](@ref)).
If `overwrite=false` (the default), uses `insert!` to perform this operation,
so an error will be thrown if any sample already contains a `:shannon` entry.
Otherwise, uses `set!`.
"""
function shannon!(abt::AbstractAbundanceTable; overwrite=false)
    func! = overwrite ? set! : insert!
    for s in samplenames(abt)
        col = abt[:, s]
        sh = shannon(abundances(col))
        func!(samples(col)[1], :shannon, sh)
    end
    return abt
end

"""
    ginisimpson(v::Union{AbstractVector, AbstractSparseMatrix}) 
    ginisimpson(abt::AbstractAbundanceTable, overwrite=false) 

Computes the Gini-Simpson alpha diversity metric for a vector.
When called on an `AbstractAbundanceTable`,
returns a 1 x nsamples matrix with 1 entry per sample.
See also [`ginisimpson!`](@ref).
"""
function ginisimpson(v::Union{AbstractVector{T}, AbstractSparseMatrix{T}}) where T<:Real
    total = sum(v)
    relab = map(x-> x/total, v)
    return 1 - sum([x^2 for x in relab])
end

function ginisimpson(abt::AbstractAbundanceTable)
    return hcat((ginisimpson(abundances(abt[:, s])) for s in samplenames(abt))...)
end

"""
    ginisimpson!(abt::AbstractAbundanceTable; overwrite=false)

Adds a `:ginisimpson` entry to the metadata for each sample in `abt`
with the Gini-Simpson alpha diversity of that sample (see [`ginisimpson`](@ref)).
If `overwrite=false` (the default), uses `insert!` to perform this operation,
so an error will be thrown if any sample already contains a `:ginisimpson` entry.
Otherwise, uses `set!`.
"""
function ginisimpson!(abt::AbstractAbundanceTable; overwrite=false)
    func! = overwrite ? set! : insert!
    for s in samplenames(abt)
        col = abt[:, s]
        sh = ginisimpson(abundances(col))
        func!(samples(col)[1], :ginisimpson, sh)
    end
    return abt
end

"""
    braycurtis(abt::AbstractAbundanceTable)

Retruns a pairwise Bray-Curtis dissimilarity matrix. 
"""
braycurtis(abt::AbstractAbundanceTable) = pairwise(BrayCurtis(), collect(abundances(abt)), dims=2)

pcoa(abt::AbstractAbundanceTable, f=braycurtis) = fit(MDS, f(abt), distances = true)