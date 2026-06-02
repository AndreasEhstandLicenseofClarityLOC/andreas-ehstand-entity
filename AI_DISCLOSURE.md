# AI Disclosure — andreas-ehstand-entity

**Synthetic-content marking pursuant to EU AI Act Art. 50 (Regulation 2024/1689).**

## Tool Identification

This entity record was produced with substantial assistance from large language models:

- **large language models** — used for schema.org and FOAF record drafting, cross-reference structuring, and citation-metadata first-pass.
- **large language models** — used for routine reformatting, JSON-LD validation, Turtle serialisation, and bulk consistency passes between formats.

No other AI systems were used as primary generation tools.

## Authorship Split

Approximate contribution distribution across the entity record:

- **~30% AI draft** — initial schema.org and FOAF scaffolding, cross-reference structure, citation-metadata template, and machine-readable serialisations were produced by large language models under direct human prompting.
- **~70% human edit** — identity-fact verification, scope decisions on what enters the public entity record, cross-reference correctness, ORCID linkage validation, and final acceptance were performed by the human author.

The split is intentional. An entity record about a person must be authored by that person — AI scaffolding accelerates the formatting but does not substitute for human judgement on what the public identity actually is.

## Trade-offs

Using AI as a drafting tool for an entity record introduces specific failure modes that the curation discipline absorbs:

- **Identity inflation** — LLMs tend to add plausible-sounding affiliations or credentials; the human pass removes anything not directly verifiable.
- **Scope creep** — LLMs tend to enrich entity records with personal-data fields; the human pass enforces a minimal, professional-only scope.
- **Cross-reference hallucination** — any link to an external identifier (ORCID, DOI, repository URL) is verified manually against the live target before publication.
- **Format drift between serialisations** — schema.org, FOAF, and Turtle are kept synchronised by the human pass, not by trust in the AI draft.

Human curation is primary. The entity record is the author's identity claim; it cannot be delegated.

## Audit Trail

Every published file in this repository is anchored by:

- **Multi-Hash** — SHA-256, SHA-512, SHA3-256, BLAKE3 stored in `manifests/MULTI_HASH.json`.
- **OpenTimestamps** — `.ots` proofs in `manifests/` anchored across four independent calendar servers.
- **DOI** — registered via Zenodo, DataCite-immutable publication date.

The combination forms a defensive-publication chain for the entity record itself, in the same manner as the terminology corpora that the entity authors.

## Reproducibility

The repository is self-contained. An independent party can:

1. Verify file integrity against `MANIFEST.sha256`.
2. Verify timestamp against the OpenTimestamps proof.
3. Resolve the ORCID and DOI cross-references against the live registries.
4. Re-derive the JSON-LD and Turtle serialisations from the canonical `api/entity.json`.

No proprietary tooling is required.

## License

This disclosure and the entity record are released under **CC BY 4.0** — Creative Commons Attribution 4.0 International.

Note: the licence permits unmodified redistribution with attribution. Derivative entity records that purport to represent the same author are not permitted; that would constitute impersonation.

---

*Disclosure version: 1.0. Maintainer: Andreas Ehstand (Independent Researcher). Contact: ehstand.schule@gmail.com.*
