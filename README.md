# JDM-Automation
This is a JS project for searching group of  MPN to match specific # requirement 

The outocome of the console.log .....line 46 gave me something like :
{
  GPN: 'Number',
  Description: 'Description',
  Lifecycle: 'Lifecycle Phase',
  Rev: 'Rev',
  Compliance: 'Overall Compliance',
  Partype: 'Part Type',
  MPN: 'Mfr. Part Number (Manufacturers)',
  Mfr: 'Mfr. Name (Manufacturers)',
  LifecyclePhase: 'Lifecycle'
}
{
  GPN: '7087893',
  Description: 'ODM, CONN, Header, 2x4, 1.27mm pitch, Vertical, SMT, Solder, RoHS',
  Lifecycle: 'Production',
  Rev: 'A',
  Compliance: 'Compliant',
  Partype: 'Connector-Data',
  MPN: 'TFM-104-02-L-D-K-TR',
  Mfr: 'SAMTEC',
  LifecyclePhase: 'Active'
}
.
.
.
.

But I am trying to change into:


{
  {
  GPN: '7087893',
  Description: 'ODM, CONN, Header, 2x4, 1.27mm pitch, Vertical, SMT, Solder, RoHS',
  Lifecycle: 'Production',
  Rev: 'A',
  Compliance: 'Compliant',
  Partype: 'Connector-Data',
  MPN: 'TFM-104-02-L-D-K-TR',
  Mfr: 'SAMTEC',
  LifecyclePhase: 'Active'
  },
 
  {
  GPN: '7087893',
  Description: 'ODM, CONN, Header, 2x4, 1.27mm pitch, Vertical, SMT, Solder, RoHS',
  Lifecycle: 'Production',
  Rev: 'A',
  Compliance: 'Compliant',
  Partype: 'Connector-Data',
  MPN: 'TFM-104-02-L-D-K-TR',
  Mfr: 'SAMTEC',
  LifecyclePhase: 'Active'
 },
 .
 .
 .
}

Please refert to the latest resul as below:
![latestResult](https://user-images.githubusercontent.com/32190878/171293679-7db3d1de-df19-462a-bc80-b259cc8cdcc5.JPG)

 
