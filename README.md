# mask-user-data
This will mask the user's sensitive data based on the parameters.<br><br>


<h2>Install</h2>
npm i mask-user-data<br><br>


<h2>Parameters</h2>
It'll accept three parameters- <br>
1. Original data (string / number), <br>
2. Index visible from (number) and returns a string and<br>
3. Mask symbol (default is *). <br>

<table>
  <tr>
    <th>Parameters</th>
    <th>Data Type</th>
    <th>Mandatory</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Original Data</td>
    <td>string/number</td>
    <td>Yes</td>
    <td>Need to send user's sensitive data, what we want to mask</td>
  </tr>
  <tr>
    <td>Index Visible From</td>
    <td>string/number</td>
    <td>Optional</td>
    <td>Need to send from which index, original data will be visible, by default it'll begin with *</td>
  </tr>
  <tr>
    <td>Mask symbol</td>
    <td>string</td>
    <td>Optional</td>
    <td>Need to send which symbol will be considered to display masked data. Default value is *</td>
  </tr>
  
  </tr>
</table><br>


<h2>Implementation Guideline</h2>
Import the package from: <br><b>const maskUserData= require('mask-user-data')</b><br>Use the function: <br><b>console.log(maskUserData("1234567890","4","#"))</b><br>
  or  <br>
Import the package from: <br><b>import maskUserData from 'mask-user-data';</b><br>Use the function: <br><b>console.log(maskUserData("1234567890","4"))</b><br><br>


<h2>Realtime Examples</h2>

<b>Use case \# 1:</b><br>
<u>Requirement:</u><br> If the original data is `1234567890` (sensitive, bank account number which you want to mask) <br>Index visible from is 4, <br>
<u>Use:</u> <br>maskUserData("1234567890",4);<br>
<u>Output:</u> <br>`******7890`.<br><br>


<b>Use case \# 2:</b><br>
<u>Requirement:</u><br> If the original data is `1234567890` (sensitive, bank account number which you want to mask) <br>Index visible from is 4 and wants to mask the data with '#' symbol, <br>
<u>Use:</u> <br>maskUserData("1234567890",4,"#");<br>
<u>Output:</u> <br>`######7890`.<br><br>


<b>Use case \# 3:</b><br>
<u>Requirement:</u><br> If the original data is `123` <br>Index visible from is 4, <br>
<u>Use:</u> <br>maskUserData("123",4);<br>
<u>Output:</u> <br>`123` (it'll not throw any error).<br><br>


<b>Use case \# 4:</b><br>
<u>Requirement:</u><br> If the original data is `12345` <br>Index visible from is '', <br>
<u>Use:</u> <br>maskUserData("12345",''); or 
maskUserData(123,'');<br>
<u>Output:</u> <br>`12345` (masking will perform only if you're providing the second parameter).
<br><br>

<h2>Version History</h2>
<h3>1.0.4</h3>
new (third) parameter has been be added, so that you can pass the mask data syntax (*, -, # etc.)
<h3>1.0.3</h3>
npm homepage, user guide documentation update
<h3>1.0.2</h3>
npm homepage, user guide documentation update
<h3>1.0.1</h3>
package.json description update
<h3>1.0.0</h3>
Actual code publish
<br><br>