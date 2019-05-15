def test():
    # only check that the code runs and nwbfile.identifier is somewhere in the solution
    assert "nwbfile.identifier" in __solution__.splitlines()[-1], "Are you printing the session identifier?"

    __msg__.good("Well done!")
