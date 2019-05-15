def test():
    # only check that the code runs and nwbfile.identifier is in the last line of the solution
    assert "nwbfile.identifier" in __solution__.strip().splitlines()[-1], "Are you printing the session identifier?"

    __msg__.good("Well done!")
