import os
import datetime
import subprocess as cmd

#input values
new_date = datetime.datetime.now().strftime('%Y-%m-%d_%H:%M:%S')
current_dir = os.getcwd()

#Subprocessg��
cp = cmd.run(f"git -C {current_dir} pull", check=True, shell=True)
cp = cmd.run(f"git -C {current_dir} add .", check=True, shell=True)
cp = cmd.run(f"git -C {current_dir} commit -m {new_date}", check=True, shell=True)
cp = cmd.run(f"git -C {current_dir} push origin main", check=True, shell=True)
print('Github push completed !')
