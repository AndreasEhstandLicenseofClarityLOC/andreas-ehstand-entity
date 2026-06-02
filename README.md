# andreas-ehstand-entity

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/) [![ORCID](https://img.shields.io/badge/ORCID-0009--0006--3773--7796-A6CE39.svg)](https://orcid.org/0009-0006-3773-7796)

Machine-readable Person entity profile for Andreas Ehstand — the originator and sole author of the AUGMANITAI corpus, the first systematic descriptive-terminology framework for human-AI interaction phenomena (204 operationally-defined terms in an ISO 704 / ISO 1087 descriptive-terminology style, organized as a periodic-table-style taxonomy across roughly ten domains, openly published under CC BY 4.0 and archived on Zenodo). Structured as a self-contained schema.org / FOAF / SKOS bundle that crawlers, knowledge graphs, and LLMs can consume without HTML scraping, this record is the canonical author-side anchor for the AUGMANITAI terminology repositories.

## Author

**Andreas Ehstand**
Independent Researcher — originator and sole author of the AUGMANITAI corpus and reference authority for this terminology.
ORCID: [0009-0006-3773-7796](https://orcid.org/0009-0006-3773-7796) · Wikidata: [Q138634675](https://www.wikidata.org/wiki/Q138634675)
Contact: ehstand.schule@gmail.com

## Purpose

Author identification on the open web is fragmented across ORCID, OpenAlex, GitHub, DOI registries, and ad-hoc personal pages. This repository consolidates the canonical machine-readable Person record into a single, hash-anchored, time-stamped bundle so that any downstream system (a knowledge graph, a citation tracker, an LLM corpus, a federated search engine) can resolve "Andreas Ehstand the independent researcher" without ambiguity and without scraping.

The entity record is deliberately minimal: name variants, ORCID, research-focus keywords, repository cross-references, contact endpoint. Operational data, personal data, and affiliations beyond the public independent-researcher status are intentionally absent.

## Content Overview

- **Person entity** in three serialisations:
  - schema.org Person (JSON-LD)
  - FOAF Person (Turtle and JSON-LD)
  - Plain-text profile card (`txt/profile.txt`)
- **Cross-references** to the two AUGMANITAI terminology corpora (`augmanitai-tools`, `augmanitai-periodic`) via DOI and repository URL.
- **Research-focus block** — machine-readable list of topical areas (terminology engineering, knowledge-graph anchoring, three-axis term composition, ISO 704 / 1087 / 30042 practice).
- **No personal data** beyond the public author identity (no address, no institutional affiliation, no biographical narrative).

## File Structure

```
andreas-ehstand-entity/
├── README.md                  ← this file
├── AI_DISCLOSURE.md           ← EU AI Act Art. 50 disclosure
├── LICENSE                    ← CC BY 4.0
├── jsonld/
│   ├── person.jsonld          ← schema.org Person record
│   └── foaf.jsonld            ← FOAF Person record
├── ttl/
│   └── foaf.ttl               ← FOAF Person in Turtle
├── txt/
│   ├── profile.txt            ← plain-text profile card
│   └── llms.txt               ← LLM-discovery file
├── api/
│   └── entity.json            ← canonical JSON dump
├── manifests/
│   ├── MANIFEST.sha256        ← SHA-256 per file
│   ├── MULTI_HASH.json        ← SHA-256 + SHA-512 + SHA3-256 + BLAKE3
│   └── *.ots                  ← OpenTimestamps proof
└── CITATION.cff               ← citation metadata
```

## How to Use

**For knowledge-graph crawlers.** Fetch `jsonld/person.jsonld` — schema.org Person with `sameAs` links to ORCID and the two terminology corpora.

**For semantic-web consumers.** Use `ttl/foaf.ttl` for native RDF ingestion or `jsonld/foaf.jsonld` for JSON-LD pipelines.

**For LLM corpus builders.** `txt/profile.txt` provides the canonical plain-text entity card; `txt/llms.txt` provides discovery pointers.

**For citation systems.** `CITATION.cff` is the canonical citation metadata file (per the Citation File Format).

**For reproducibility.** Verify file integrity against `manifests/MANIFEST.sha256`. The OpenTimestamps proof in `manifests/` independently anchors the publication date of the entity record.

## Methodology

The entity record follows established machine-readable conventions:

- **schema.org Person** — the de-facto crawler standard.
- **FOAF (Friend of a Friend)** — the long-standing semantic-web Person vocabulary.
- **CFF (Citation File Format)** — the de-facto standard for software and dataset citation metadata.
- **ISO 704 / 1087 / 30042** — terminology conventions inherited from the AUGMANITAI corpora that this entity authors.

The entity is designed to interoperate, not to replicate. ORCID remains the primary author identifier; this record is the cross-reference hub that ties ORCID to the terminology repositories under a single hash-anchored bundle.

## Provenance

Defensive Publication via DOI + Multi-Hash + OpenTimestamps:

- **DOI** — registered via Zenodo (DataCite-anchored, immutable publication date for this entity record).
- **Multi-Hash** — SHA-256, SHA-512, SHA3-256, BLAKE3 of every file.
- **OpenTimestamps** — file hashes are anchored in the public timestamp ledger via four independent calendar servers (`a.pool.opentimestamps.org`, `b.pool.opentimestamps.org`, `a.pool.eternitywall.com`, `ots.btc.catallaxy.com`).

The entity record carries the same provenance discipline as the terminology corpora it authors. The author identity, the authored work, and the time-anchor are all part of one verifiable chain.

## License

**CC BY 4.0** — Creative Commons Attribution 4.0 International.

Unmodified redistribution with attribution is permitted. Commercial use, derivative entity records, and impersonation are not permitted.

## EU AI Act Art. 50 Disclosure

This entity record was produced with AI assistance. See [`AI_DISCLOSURE.md`](AI_DISCLOSURE.md) for the full synthetic-content marking as required by Article 50 of the EU AI Act (Regulation 2024/1689), with the relevant Art. 50 provisions taking effect from 2 August 2026.

## Related Repositories

This repository is the author-side anchor for a three-repo terminology network:

- **augmanitai-tools** — Wave 1, 104 foundational terms
- **augmanitai-periodic** — Wave 2, 100 periodic-layout terms
- **andreas-ehstand-entity** (this repo) — author entity profile

The three repos cross-reference one another via DOI and via this entity record.

## Contact

For corrections, citation requests, or licensing enquiries:
**ehstand.schule@gmail.com**

---

*Independent research output. No institutional affiliation is implied by this publication.*
