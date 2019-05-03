fhand = open("headpp.ply")
fout = open("headp_no_normal.ply", "w")
header_ended = False
for line in fhand:
    if not header_ended:
        fout.write(line)
    else:
        fout.write(" ".join(line.split()[:3]))
        fout.write("\n")
    if "end_header" in line:
        header_ended = True
fout.close()
