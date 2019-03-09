Rationale
---------

"Managers at many levels are just bursting with probabilistic knowledge, which if properly channeled can be put to good use."
 - Sam Savage, The Flaw of Averages

Estimate (from user input) hrad data /soft data / sme estimates 
vs Derive (from Data)

frequency over standard unit of time, usually a year

Data structures
---------------

Use firebase cloudstore schema concepts 'collections' (⇱) and 'maps' (⌌).

```
⇱ Risks
 ⌌ Risk
   ⌌ Scope
    ⊳ Description
   ⌌ ThreatFrequency
     ⌌ ThreatEventFrequency
     ⌌ ThreatForce
     ⌌ ThreatResistance
   ⌌ LossMagnitude
     ⌌ PrimaryLoss
     ⇱ SecondaryLosses
      ⌌ RiskReference

⇱ Distributions (Triangular?)
 ⌌ Estimate
  ⊳ Min
  ⊳ Med
  ⊳ Max
  ⌌ Rationale
   ⊳ Name of Person
   ⊳ Title
   ⊳ Data used to inform (historical events, logs, external sources)
   ⊳ Controls considered
   ⊳ Remaining uncertainty
```

Algorithms
----------

ExpectedRisk = CalculateRisk (RiskMap)
GeneratedDistribution = TriangularDistribution (Estimate)

User stories
------------

AS a leadership team I
 - want an aggregated, visible measure of risk for a particular PS account
   so that I am aware of all identified risks in order that I can fulfil my responsibilities 
   and I can allocate limited resources more effectively to manage that risk

AS a infosec lead I
 - need a record keeping system for storing details pertaining to risk related to Infosec
 - want a visible measure of risk for a particular PS account
   so that I am aware of all identified risks in order that I can fulfil my responsibilities 

AS legal I
 - want to be able to see record detailed information about the contractual infosec exposure on a specific account

AS a CST I 
 - want to be able to see detailed information about the contractual infosec exposure on my account


References
----------

- https://vimeo.com/70926140
- https://www.probabilitymanagement.org/stanford-webinar-videos
- https://mcdlr.com/utf-8/#8603
- http://blogs.reuters.com/felix-salmon/2009/08/23/the-flaw-of-averages/
- http://flawofaverages.com/lib/Red%20Words.pdf
