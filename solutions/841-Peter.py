class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        visited = set()
        to_visited = [0]

        while (len(to_visited) > 0):
            c = to_visited.pop(0)
            visited.add(c)
            for key in rooms[c]:
                if key not in visited:
                    to_visited.append(key)

        return len(visited) == len(rooms)
