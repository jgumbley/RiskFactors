
Thoughts on this topic

what tests would you write?

calculate expected annual loss
given 
    TASIP=generateTASIP(0, 1, 10)
    LESIP=generateLESIP($10, $100, $1000)
when
    const analysis = FAIRAnalysis(TASIP, LESIP)
    result = analysis.eal();
then
    expect(result).equals("$100");

Threat Event Frequency
-> SIP
-> Distribution (SIP, Array of variables generated)

Loss Magnitude
-> Distribution

Monte carlo them together (SIPs monte carlo automatically)
