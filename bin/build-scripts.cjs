#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore file */
const commands_1 = require("./../cli/commands/index.cjs");
new commands_1.BuildScripts()
    .execute()
    .then(() => commands_1.BuildScripts.log.info("Scripts built successfully."))
    .catch((e) => {
    try {
        if (!e?.logged) {
            commands_1.BuildScripts.log.error(`Error building scripts: ${e}`);
        }
    }
    catch {
        // fallback
        console.error(e);
    }
    process.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtc2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vYnVpbGQtc2NyaXB0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUEwQjtBQUMxQiwwREFBK0M7QUFFL0MsSUFBSSx1QkFBWSxFQUFFO0tBQ2YsT0FBTyxFQUFFO0tBQ1QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0tBQ2hFLEtBQUssQ0FBQyxDQUFDLENBQVUsRUFBRSxFQUFFO0lBQ3BCLElBQUksQ0FBQztRQUNILElBQUksQ0FBRSxDQUFTLEVBQUUsTUFBTSxFQUFFLENBQUM7WUFDeEIsdUJBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELENBQUM7SUFDSCxDQUFDO0lBQUMsTUFBTSxDQUFDO1FBQ1AsV0FBVztRQUVYLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xuaW1wb3J0IHsgQnVpbGRTY3JpcHRzIH0gZnJvbSBcIi4uL2NsaS9jb21tYW5kc1wiO1xuXG5uZXcgQnVpbGRTY3JpcHRzKClcbiAgLmV4ZWN1dGUoKVxuICAudGhlbigoKSA9PiBCdWlsZFNjcmlwdHMubG9nLmluZm8oXCJTY3JpcHRzIGJ1aWx0IHN1Y2Nlc3NmdWxseS5cIikpXG4gIC5jYXRjaCgoZTogdW5rbm93bikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIShlIGFzIGFueSk/LmxvZ2dlZCkge1xuICAgICAgICBCdWlsZFNjcmlwdHMubG9nLmVycm9yKGBFcnJvciBidWlsZGluZyBzY3JpcHRzOiAke2V9YCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBmYWxsYmFja1xuXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH0pO1xuIl19