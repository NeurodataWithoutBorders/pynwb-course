---
type: slides
---

# Writing and Reading NWB Files

---

# Writing an NWB file

Writing and reading of NWB files is handled by the `NWBHDF5IO` class (read as NWB-HDF5-IO). To write an `NWBFile` object, create a new instance of `NWBHDF5IO` with the filename that you want to write to. You also have to specify that you want to write to the file using the 'w' argument (use 'r' to open the file for reading). Then, use the `write` method on your `NWBFile` object.

```python
from pynwb import NWBHDF5IO

with NWBHDF5IO('example_file_path.nwb', 'w') as io:
    io.write(nwbfile)
```

That's it! All together, this code makes an NWB file called `example_file_path.nwb` containing a mouse's running speed for 1000 seconds as well as structured metadata associated with this experimental session.

---

# Let's practice!
