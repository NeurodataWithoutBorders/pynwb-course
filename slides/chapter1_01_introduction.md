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

NWB files (`.nwb`) can be read and written in Python and MATLAB. This lesson will walk you through how to interact with NWB files in **Python**. We will use the **PyNWB** package.

This lesson requires only basic experience programming in Python.

---

# The NWBFile object

`NWBFile` is the core class of PyNWB. It represents the file to which all data and metadata will be stored. It is recommended to use a single `NWBFile` to contain all data related to a single experimental session.

```python
# Import the NWBFile class
from pynwb import NWBFile

# Create an NWBFile object with some metadata. These arguments are required
nwbfile = NWBFile(session_description='Mouse Running on Spherical Treadmill',
                  identifier='Mouse314-Running',
                  session_start_time=None)
```

---

# Setting the session start time

In the previous example, we set the `session_start_time` argument for the `NWBFile` constructor to `None`. That's actually not allowed. Storing times properly is important for understanding most neurophysiology data. In an NWB file, timestamps are stored relative to a defined, shared starting time. You could define it as the time that data acquisition began for this session, or a more global start time, such as January 1, 1970 (the Unix time reference). The latter works better if you plan to combine data from multiple sessions into a single file.

Let's set the `session_start_time` argument to April 21, 2019 at 11:00am in the current timezone.

```python
# Import utilities for working with dates and times
from datetime import datetime
from dateutil.tz import tzlocal
from pynwb import NWBFile

# Create a datetime object representing the start of the experiment
start_time = datetime(2019, 4, 21, 11, 0, tzinfo=tzlocal())

# Create an NWBFile object
nwbfile = NWBFile(session_description='Mouse Running on Spherical Treadmill',
                  identifier='Mouse314-Running',
                  session_start_time=start_time)
```

---

# Accessing NWBFile fields

To access the metadata variables of an `NWBFile`, such as the session description or the identifier, simply use the 'dot' notation:

```python
print(nwbfile.session_description)
```
```out
Mouse Running on Spherical Treadmill
```

---

# Let's practice!
