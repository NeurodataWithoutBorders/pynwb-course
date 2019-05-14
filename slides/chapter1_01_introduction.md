---
type: slides
---

# Introduction to NWB

---

# What is NWB?

Neurodata Without Borders, or NWB, is a data standard for neurophysiology. It was developed by a group of neuroscientists and software developers who recognize that adoption of a unified data format is an important step toward breaking down the barriers to data sharing in neuroscience.

---

# Getting started

In this lesson, we will take a look at the most important concepts of NWB and how to get started using it.

NWB files (`.nwb`) can be read and written in Python and MATLAB. This lesson will walk you through how to interact with NWB files in **Python**. We will use the PyNWB package.

This lesson assumes you have basic experience programming in Python.

---

# The NWBFile object

`NWBFile` is the core class of PyNWB. It represents the file to which all data and metadata will be stored.

```python
# Import the NWBFile class
from pynwb import NWBFile

# Create an NWBFile object with some metadata. These arguments are required
nwbfile = NWBFile(session_description='My best recording session',
                  identifier='Mouse314',
                  session_start_time=None)
```

---

# Setting the session start time

In the previous example, we set the `session_start_time` argument for the `NWBFile` constructor to `None`. That's actually not allowed. All timestamps are stored relative to a shared, or global, starting time. This could be the time that data acquisition began for this session, or it could be a more global start time, such as January 1, 1970.

As an example, let's set the `session_start_time` argument to April 21, 2019 at 11:00am in the current timezone.

```python
# Import utilities for working with dates and times
from datetime import datetime
from dateutil.tz import tzlocal
from pynwb import NWBFile

# Create a datetime object representing the start of the experiment
start_time = datetime(2019, 4, 21, 11, 0, tzinfo=tzlocal())

# Create an NWBFile object
nwbfile = NWBFile(session_description='My best recording session',
                  identifier='Mouse314',
                  session_start_time=start_time)
```

---

# Adding time series data

Neuroscience data often consists of values that vary over time, or time series data. This could be voltages recorded extracellularly or intracellularly over time, flourescence intensity over time, or some behavioral measure over time.
PyNWB stores time series data using the `TimeSeries` class and its specialized subclasses. To create a `TimeSeries` object, you need to pass as arguments to the constructor: a `name`, the `data`, the `unit` of measurement, and `timestamps` for each data point, in seconds.

Let's randomly generate 1000 data points and create a `TimeSeries` for them.

```python
from pynwb import TimeSeries
from numpy.random import rand # to create some random data

# Generate some random data
data = rand(1000)
timestamps = list(range(1000))

# Create a TimeSeries object
test_ts = TimeSeries(name='A random time series in meters',
                     data=data,
                     unit='m',
                     timestamps=timestamps)
```
---

# Adding the data to the NWBFile

Use the `NWBFile` method `add_acquisition` to add your time series to the `NWBFile` and label it as acquisition data.

```python
nwbfile.add_acquisition(test_ts)
```

---

# Writing the NWB file

Reading and writing of NWB files is handled by the `NWBHDF5IO` class (read as NWB-HDF5-IO). To write an `NWBFile` object, create a new instance of `NWBHDF5IO` with the filename that you want to write to and specify the file write mode using the 'w' argument. Then, use the `write` method on your `NWBFile` object.

```python
from pynwb import NWBHDF5IO

with NWBHDF5IO('example_file_path.nwb', 'w') as io:
    io.write(nwbfile)
```

That's it! This code just made an NWB file called `example_file_path.nwb` which contains 1000 random data points and some associated metadata.

---

# Let's practice!
