---
title: 'Chapter 1: Getting started'
description:
  'This chapter will introduce you to the basics of the Neurodata Without Borders:
  Neurophysiology (NWB:N) data format using Python.'
prev: null
next: /chapter2
type: chapter
id: 1
---

<exercise id="1" title="Introduction" type="slides">

<slides source="chapter1_01_introduction">
</slides>

</exercise>

<exercise id="2" title="Try It Out Yourself">

### Part 1: Creating an NWBFile

Let's try out PyNWB! First, let's review how to create an `NWBFile`. Change the
code below to do the following:

- Import the `NWBFile` class from `pynwb`, create the `NWBFile` object
- You will need to pass in the arguments `session_description`, `identifier`,
and `session_start_time` to the constructor.
- Finally, print out the session identifier from the `NWBFile`.

<codeblock id="01_02_01">

Review the code in Section 1 if you are stuck!

</codeblock>

### Part 2: Creating a TimeSeries

Now let's review how to create a `TimeSeries`.

- Import the `TimeSeries` class from `pynwb`, create the `TimeSeries` object
- You will need to pass in the arguments `data`, `units`,
and `timestamps` to the constructor.
- Finally, print out the data from the `TimeSeries`.

<codeblock id="01_02_02">

Review the code in Section 1 if you are stuck!

</codeblock>

### Part 3: Add a TimeSeries to an NWBFile

Now let's review how to add a `TimeSeries` to an `NWBFile`.

- Use the appropriate method of `NWBFile` to add the `TimeSeries` to `nwbfile`.
- Access the `TimeSeries` object that you just added and print it.

<codeblock id="01_02_03">

Use the name of the time series to get it from nwbfile.acquisition
Review the code in Section 1 if you are stuck!

</codeblock>

</exercise>

<exercise id="3" title="Review Questions">

Pop quiz! What units are all timestamps of `TimeSeries` stored as?

<choice>
<opt text="Milliseconds">

Sorry, try again.

</opt>

<opt text="Seconds" correct="true">

Good job!

</opt>

<opt text="Days">

Sorry, try again.

</opt>
</choice>

An `NWBFile` requires a `session_description`, an `identifier`, and what?

<choice>
<opt text="institution">

`institution` is not a required argument, but it _is_ and optional argument.

</opt>

<opt text="subject">

`subject` is not a required argument, but it _is_ and optional argument.

</opt>

<opt text="session_start_time" correct="true">

Correct! You must specify a `session_start_time` to which all timestamps in the
`NWBFile` will be referenced.

</opt>
</choice>


</exercise>
